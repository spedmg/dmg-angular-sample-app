module Api::V1
  class HelloController < ApplicationController
    def index
      render json: 'hello'
    end
  end
end