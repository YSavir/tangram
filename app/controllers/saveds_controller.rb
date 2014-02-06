class SavedsController < ApplicationController

  def destroy
    destroy_id = params[:id]
    Saved.find(destroy_id).destroy
    respond_to do |format|
      format.json { render json: "{}" }
      format.html
    end
  end

end