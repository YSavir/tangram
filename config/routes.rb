Tanagram::Application.routes.draw do

  root to: "puzzles#index"

  resources :puzzles

#          root        /                           puzzles#index
#     puzzles GET    /puzzles(.:format)          puzzles#index
#             POST   /puzzles(.:format)          puzzles#create
#  new_puzzle GET    /puzzles/new(.:format)      puzzles#new
# edit_puzzle GET    /puzzles/:id/edit(.:format) puzzles#edit
#      puzzle GET    /puzzles/:id(.:format)      puzzles#show
#             PUT    /puzzles/:id(.:format)      puzzles#update
#             DELETE /puzzles/:id(.:format)      puzzles#destroy

end
