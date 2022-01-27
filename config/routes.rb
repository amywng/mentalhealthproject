Rails.application.routes.draw do
  root 'pages#home'
  get 'draw', to: 'pages#draw'
  get 'pages/home'
  get 'pages/draw'
  get 'pages/login'
  get 'pages/gallery'
  get 'pages/join'
end
