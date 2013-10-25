# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

include Nanoc3::Helpers::Blogging
include Nanoc3::Helpers::Tagging
include Nanoc3::Helpers::Rendering
include Nanoc3::Helpers::LinkTo

module PostHelper
  def get_pretty_date(created_at)
    attribute_to_time(created_at).strftime('%B %-d, %Y')
  end
end

include PostHelper