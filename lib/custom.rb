def nav_link_to_unless_current(text, path)
  if @item_rep and @item_rep.path == path
    "<li class='active'><a href='#{path}'>#{text}</a></li>"
  else
    "<li><a href='#{path}'>#{text}</a></li>"
  end
end

def sort_items_by_title(kind, initialTitles)
  sortedItems = []
  restItems = []
  itemsOfKind = @items.select{|i| i[:kind] == kind}
  initialTitles.each do |t|
    item = itemsOfKind.select{|i| i[:title] == t}
    sortedItems = sortedItems + item
  end
  itemsOfKind.each do |ik|
    has_listed_title = false
    initialTitles.each do |t|
        if ik[:title] == t
            has_listed_title = true
            break
        end
    end
    if !has_listed_title
        restItems << ik
    end
  end
  return sortedItems + restItems
end
