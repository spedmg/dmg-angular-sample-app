require 'spec_helper'

feature 'Say Hello' do
  scenario '', :js => true do
    Given 'I\'m on the welcome page'
    When 'I click Say Hello'
    Then 'I see Hello!'
  end

  def im_on_the_welcome_page
    visit '/'
  end

  def i_click_say_hello
    click_on 'Say Hello'
  end

  def i_see_hello
    within 'div' do
      expect(page).to have_selector 'h2', text: 'Hello!'
    end
  end
end
