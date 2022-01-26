require "test_helper"

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get root" do
    get root_url
    assert_response :success
  end

  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get draw" do
    get static_pages_draw_url
    assert_response :success
  end

  test "should get login" do
    get static_pages_login_url
    assert_response :success
  end

  test "should get gallery" do
    get static_pages_gallery_url
    assert_response :success
  end

  test "should get join" do
    get static_pages_join_url
    assert_response :success
  end
end
