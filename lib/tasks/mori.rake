namespace :mori do
  desc "Mori travail"
  task heroku: :environment do
      `git push heroku master`
      `heroku run bundle exec rake db:migrate`
  end

end
