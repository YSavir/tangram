Tanagram::Application.routes.draw do

  root to: "puzzles#index"

  post "puzzles/" => "puzzles#index"
  post "puzzles/save" => "puzzles#save"
  post "puzzles/load" => "puzzles#load"
  post "puzzles/user_saves" => "puzzles#user_saves"

  devise_for :users

  resources :puzzles
  resources :saveds

#                     root        /                              puzzles#index
#                  puzzles POST   /puzzles(.:format)             puzzles#index
#             puzzles_save POST   /puzzles/save(.:format)        puzzles#save
#             puzzles_load POST   /puzzles/load(.:format)        puzzles#load
#       puzzles_user_saves POST   /puzzles/user_saves(.:format)  puzzles#user_saves
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
#                          GET    /puzzles(.:format)             puzzles#index
#                          POST   /puzzles(.:format)             puzzles#create
#               new_puzzle GET    /puzzles/new(.:format)         puzzles#new
#              edit_puzzle GET    /puzzles/:id/edit(.:format)    puzzles#edit
#                   puzzle GET    /puzzles/:id(.:format)         puzzles#show
#                          PUT    /puzzles/:id(.:format)         puzzles#update
#                          DELETE /puzzles/:id(.:format)         puzzles#destroy
#                   saveds GET    /saveds(.:format)              saveds#index
#                          POST   /saveds(.:format)              saveds#create
#                new_saved GET    /saveds/new(.:format)          saveds#new
#               edit_saved GET    /saveds/:id/edit(.:format)     saveds#edit
#                    saved GET    /saveds/:id(.:format)          saveds#show
#                          PUT    /saveds/:id(.:format)          saveds#update
#                          DELETE /saveds/:id(.:format)          saveds#destroy

end
