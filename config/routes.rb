H2::Application.routes.draw do
  resources :events
  get '/event/participate' =>'events#participate'

  root :to => "home#index"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
end
