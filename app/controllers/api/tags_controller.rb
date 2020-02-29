class Api::TagsController < ApplicationController

  def suggested
    tag_count_hash = {}
    recent_viewings = View.all.order(created_at: :desc)[0...10]
    recent_viewings.each do |view|
      # product = Product.find(view.product_id)
      product = view.product
      product.tags.each do |tag|
        if tag_count_hash[tag]
          tag_count_hash[tag] += 1
        else
          tag_count_hash[tag] = 1
        end
      end
    end
    sorted_tag_counts = tag_count_hash.values.sort!.reverse!
    @tags = []
    (0...4).each do |i|
      cur_val = sorted_tag_counts[i]
      tag_count_hash.each do |k, v|
        if !@tags.include?(k) && v == cur_val
          @tags << k
          break
        end
      end
    end
    render :tags_array
  end

end