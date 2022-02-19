class PagesController < ApplicationController
  def home
  end

  def draw
  end

  def login
  end
  
  def gallery
    @images = Cloudinary::Api.resources(:type=>:upload, :max_results=>30)['resources']
  end
end
