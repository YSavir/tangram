Tanagram::Application.routes.draw do

  root to: "puzzles#index"

  post "puzzles/save" => "puzzles#save"
  post "puzzles/load" => "puzzles#load"

  devise_for :users

  resources :puzzles

#                     root        /                              puzzles#index
#         new_user_session GET    /users/sign_in(.:format)       devise/sessions#new
#             user_session POST   /users/sign_in(.:format)       devise/sessions#create
#     destroy_user_session DELETE /users/sign_out(.:format)      devise/sessions#destroy
#            user_password POST   /users/password(.:format)      devise/passwords#create
#        new_user_password GET    /users/password/new(.:format)  devise/passwords#new
#       edit_user_password GET    /users/password/edit(.:format) devise/passwords#edit
#                          PUT    /users/password(.:format)      devise/passwords#update
# cancel_user_registration GET    /users/cancel(.:format)        devise/registrations#cancel
#        user_registration POST   /users(.:format)               devise/registrations#create
#    new_user_registration GET    /users/sign_up(.:format)       devise/registrations#new
#   edit_user_registration GET    /users/edit(.:format)          devise/registrations#edit
#                          PUT    /users(.:format)               devise/registrations#update
#                          DELETE /users(.:format)               devise/registrations#destroy
#                  puzzles GET    /puzzles(.:format)             puzzles#index
#                          POST   /puzzles(.:format)             puzzles#create
#               new_puzzle GET    /puzzles/new(.:format)         puzzles#new
#              edit_puzzle GET    /puzzles/:id/edit(.:format)    puzzles#edit
#                   puzzle GET    /puzzles/:id(.:format)         puzzles#show
#                          PUT    /puzzles/:id(.:format)         puzzles#update
#                          DELETE /puzzles/:id(.:format)         puzzles#destroy

end
