namespace :mori do
  desc "Mori travail"
  task heroku: :environment do
      `git push heroku master`
  end

end
