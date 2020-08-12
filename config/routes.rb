Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'site#index'
  post "tasks/create"
  get "tasks/index"
  patch "/tasks/:id", to: "tasks#update"
  get '/*path' => 'site#index'
end
