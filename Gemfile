source 'https://rubygems.org'
ruby '2.1.0'
gem 'rails', '4.0.3'
gem 'pg', group: :production
gem 'sqlite3',group: :development
gem 'sass-rails', '~> 4.0.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 1.2'
gem 'bootstrap-sass', '~> 2.3.2.2'
gem 'cancan'
gem 'devise'
gem 'devise_invitable'
gem 'figaro'
gem 'haml-rails'
gem 'rolify'
gem 'simple_form'
gem 'therubyracer', :platform=>:ruby
gem 'thin'

#Gem heroku pour faire du test en reel
gem 'heroku'
gem 'jquery-ui-rails'

#Gem gestion heroku
gem 'rails_12factor', group: :production
gem 'sendgrid'

group :development do

#Gem pour le debug
  
  gem 'pry'
  gem 'pry-rails'
  gem 'pry-byebug'

  gem 'better_errors'
  gem 'binding_of_caller', :platforms=>[:mri_19, :mri_20, :rbx]
  gem 'guard-bundler'
  gem 'guard-rails'
  gem 'guard-rspec'
  gem 'html2haml'
  gem 'quiet_assets'
  gem 'rails_layout'
  gem 'rb-fchange', :require=>false
  gem 'rb-fsevent', :require=>false
  gem 'rb-inotify', :require=>false
  gem 'annotate'
end
group :development, :test do
  gem 'factory_girl_rails'
  gem 'rspec-rails'
end


group :test do
  gem 'capybara'
  gem 'database_cleaner', '1.0.1'
  gem 'email_spec'
end
