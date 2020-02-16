# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Load .env
require 'dotenv'
Dotenv.load
