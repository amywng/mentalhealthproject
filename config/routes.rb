Rails.application.routes.draw do
  resources :users
  root 'pages#home'
  get 'home', to: 'pages#home'
  get 'draw', to: 'pages#draw'
  get 'login', to: 'pages#login'
  get 'gallery', to: 'pages#gallery'
  get 'join', to: 'users#new'
  get 'users', to: 'users#index'
end
