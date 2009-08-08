# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_form_auto_save_cookies_session',
  :secret      => '4f955b8b7e79bebfbf31cfde79356b3d382b7b31cdf6ff35b3b17530f17a036f4b08ac20fb1646d309060fcc5ae666467b291220e42c494fd52edc684f5743e0'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
