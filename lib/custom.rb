def nav_link_to_unless_current(text, path)
  if @item_rep and @item_rep.path == path
    "<li class='active'><a href='#{path}'>#{text}</a></li>"
  else
    "<li><a href='#{path}'>#{text}</a></li>"
  end
end
