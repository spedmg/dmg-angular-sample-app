module Api::V1
  class HelloController < ApplicationController
    def index
      render json: %w(hello hola hallo bonjour aloha ciao konnichiwa namaste)[rand(7)]
    end
  end
end