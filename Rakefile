abort('Please run this using `bundle exec rake`') unless ENV["BUNDLE_BIN_PATH"]
require 'html-proofer'

desc "Test the website"
task :test => [:build, 'html:check'] do
    options = {
        :check_favicon    => true,
        :disable_external => true,
        :check_html       => true,
        :check_img_http   => true,
        :check_opengraph  => true,
        :enforce_https    => true,
        :url_ignore       => [/^mailto:\?body=/]
    }
    begin
        HTMLProofer.check_directory("./public", options).run
    rescue => msg
        puts "#{msg}"
    end
end

task :default => [:test]