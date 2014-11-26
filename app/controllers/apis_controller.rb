class ApisController < ApplicationController

  def getAll

    tiles = Tile.all.sort

    if tiles.length > 0
      check = true
    else
      check = false
    end

    render :json => {
      'tiles' => tiles,
      'success' => check
    }

  end

  def saveNew
    
    tiles = params[:tiles]
    tiles_to_update = Tile.all

    # need to find a better way to do this
    # a weird way to check, but it works for now. REFACTOR LATER!
    if(tiles_to_update.length > 0)
      tiles.each do |key, value|
        Tile.find(key).update(:color => value)
      end
    else
      tiles.each do |key, value|
        Tile.create(:id => key, :color => value)
      end
    end
    # need to add a check to see if success or failed

    render :json => {
      'success' => 'successfully saved'
    }
  end

end
