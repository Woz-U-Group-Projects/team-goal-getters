const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');
const bcrypt = require('bcrypt');

passport.use(
    'local',
    new LocalStrategy(function(username, password, done) {
      models.influencer
        .findOne({
          where: {
            Username: username
          }
        })
        .then(influencer => {
          if (!influencer) {
            console.log('not influencer');
            return done(null, false, {
              message: 'Incorrect username.'
            });
          }
          if(!bcrypt.compareSync(password, influencer.Password)) {
            console.log('not valid password');
            return done(null, false, {
              message: 'Incorrect password.'
            });
          }
          return done(null, influencer);
        })
        .catch(err => {
          if (err) {
            console.log('error');
            return done(err);
          }
        });
    })
  );
  
  passport.serializeUser((influencer, cb) => {
    cb(null, influencer.UserId);
  });
  
  passport.deserializeUser((id, cb) => {
    models.influencer
      .findOne({
        where: {
          UserId: id
        }
      })
      .then(influencer => {
        cb(null, influencer);
      })
      .catch(err => {
        cb(err);
      });
  });