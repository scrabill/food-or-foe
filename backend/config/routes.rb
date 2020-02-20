Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      get '/emojis/food',  to: 'emojis#food'

      resources :emojis, :users, :games
    end
  end
end
