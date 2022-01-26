Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/draw'
	root 'application#hello'
end
