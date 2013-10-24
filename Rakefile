# rake new_portfolio TITLE=portfolio_name

require 'stringex'

desc "Create a new Portfolio"
task :new_portfolio do
  mkdir_p './content/portfolio'
  port_name = ENV['TITLE']
  # args.with_defaults(:title => 'New Portfolio')
  title = port_name
  filename = "./content/portfolio/#{title}.html"

  if File.exist?(filename)
    abort('rake aborted!') if ask("#{filename} already exists. Want to overwrite?", ['y','n']) == 'n'
  end

  puts "Creating new portfolio: #{filename}"
  open(filename, 'w') do |port|
    port.puts '---'
    port.puts "title: \"#{title}\""
    port.puts "kind: article"
    port.puts "portfolio: true"
    port.puts "url: Write the URL for this Web!"
    port.puts "---\n\n"
    port.puts "Take the example from portfolio folder to write the details and description in html format"
    port.puts "and name the image exact like the title of the new portfolio with png extension."
    port.puts "Save the image here '/content/images/screenshots_portafolio/"
  end
end