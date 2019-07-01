module Api::V1
  class ReposController < ApplicationController
    def index
      begin
        username = params[:username]
        url = URI.parse("https://api.github.com/users/#{username}/repos?sort=updated&direction=desc")
        res = Net::HTTP.get(url) 
        render json: {'repos': JSON.parse(res)}
      rescue => e
        render json: {'error': e}      
      end
    end
  end
end
