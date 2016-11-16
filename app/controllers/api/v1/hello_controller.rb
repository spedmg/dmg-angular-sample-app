module Api::V1
  class HelloController < ApplicationController
    def index
      render json: {'hello': 'hello'}
    end
  end
end
