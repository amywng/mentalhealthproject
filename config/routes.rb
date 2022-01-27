Rails.application.routes.draw do
  resources :users
  root 'pages#home'
  get 'draw', to: 'pages#draw'
  get 'pages/home'
  get 'pages/draw'
  get 'pages/login'
  get 'pages/gallery'
  get 'pages/join'
end
