# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :event do
    name "MyString"
    location "MyString"
    date_and_time_of_event "2014-03-04 17:40:37"
    description_event "MyText"
  end
end
