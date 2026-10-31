local function diff()
    local target = os.time{year=2026, month=11, day=19, hour=0, min=0, sec=0}
    local d = target - os.time()
    if d < 0 then d = 0 end
    return d
end

function Update()
    return diff()
end

function Days()    return string.format('%02d', math.floor(diff() / 86400)) end
function Hours()   return string.format('%02d', math.floor(diff() / 3600) % 24) end
function Minutes() return string.format('%02d', math.floor(diff() / 60) % 60) end
function Seconds() return string.format('%02d', diff() % 60) end

function Title()
    if diff() <= 0 then
        return 'GTA VI Released!'
    end
    return 'GTA VI Release Countdown'
end