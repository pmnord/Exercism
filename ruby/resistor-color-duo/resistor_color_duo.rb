
class ResistorColorDuo
  def self.value(array)
    result = ""
    # array[0..1].each { |color| result += resistor_map[color] }
    array.first(2).each { |color| result += resistor_map[color] }
    # puts result.to_i
    result.to_i
  end

  def self.resistor_map
    {
      "black" => "0",
      "brown" => "1",
      "red" => "2",
      "orange" => "3",
      "yellow" => "4",
      "green" => "5",
      "blue" => "6",
      "violet" => "7",
      "grey" => "8",
      "white" => "9",
    }
  end
end

ResistorColorDuo.value(["brown","grey"])