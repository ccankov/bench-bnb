class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    Bench.where(
      lat: (bounds[:southWest][:lat])..(bounds[:northEast][:lat]),
      lng: (bounds[:southWest][:lng])..(bounds[:northEast][:lng])
    ).load
  end
end
