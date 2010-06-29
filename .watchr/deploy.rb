# Run me with: $ watchr deploy.watchr

def deploy
  system "jekyll && rsync -avz --delete _site/ odin@vp.com.ve:/home/odin/public_html/staging.hasmanydevelopers"
end

watch( '^_site/*' ) { deploy }

# Ctrl-C
Signal.trap('INT') do
  puts "\nAborted\n"
  abort
end

# Ctrl-\
Signal.trap('QUIT') do
  system('clear')
  deploy
  puts "\n\n"
end

system('clear')
puts "\n***** Press Ctrl-\\ at any moment to force deploy. Ctrl-C to Abort *****\n\n"
deploy

