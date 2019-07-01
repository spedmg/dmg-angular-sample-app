module Api::V1
  class UsersController < ApplicationController
    def index
      begin
        url = URI.parse('https://api.github.com/users')
        res = Net::HTTP.get(url) 
        render json: {'users': JSON.parse(res)}
      rescue => e
        render json: {'error': e}
      end
    end
  end
end
