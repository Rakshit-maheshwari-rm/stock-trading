require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const MongoStore = require('connect-mongo').default;
const cors = require("cors");
const session = require("express-session");
const User = require("./models/User");
const HoldingsRoutes = require('./routes/Holdings');
const PositionsRoutes = require("./routes/Positions");
const OrdersRoutes = require("./routes/Orders");
const WatchlistRoutes = require('./routes/Watchlist');
const GttRoutes = require("./routes/Gtt");
const BasketRoutes = require("./routes/Basket");
const SipRoutes = require("./routes/Sip");
const AlertRoutes = require("./routes/Alert");
const AuctionRoutes = require("./routes/Auction");
const authRoutes = require("./routes/AuthRoute");
const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL;
const CLIENT_URL = process.env.CLIENT_URL;
const DASHBOARD_URL = process.env.DASHBOARD_URL;
console.log(CLIENT_URL);
console.log(DASHBOARD_URL);
mongoose.connect(MONGODB_URL)
  .then(() => console.log('Database Connected!'));

app.use(cookieParser());
app.use(express.json());
app.set("trust proxy", 1);

app.use(
  cors({
    origin: [CLIENT_URL, DASHBOARD_URL],
    credentials: true,
  })
);


const store = MongoStore.create({
    mongoUrl:MONGODB_URL,
    secret: process.env.SECRET,
    touchAfter: 24*3600
});

app.use(
  session({
    name: "stocktrading.sid",
    secret: process.env.SECRET,
    store,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    },
  })
);


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
  { usernameField: "email" },
  User.authenticate()
));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/",authRoutes);
app.use('/holdings',HoldingsRoutes);
app.use('/positions',PositionsRoutes);
app.use('/orders',OrdersRoutes);
app.use('/watchlist',WatchlistRoutes);
app.use('/gtt',GttRoutes);
app.use('/basket',BasketRoutes);
app.use('/sip',SipRoutes)
app.use('/alert',AlertRoutes);
app.use('/auction',AuctionRoutes);

app.listen(PORT,()=>{
  console.log("server started");
})
