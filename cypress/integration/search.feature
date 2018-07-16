Feature: Whats the weather

  Scenario Outline: Launch weather site and search by postcode
    Given I launch "<url>"
    Then go to the weather screen
    Then search for weather by with postcode "<postcode>"
    Then I will see the results heading "<heading>"


    Examples:
      | url                  | postcode | heading |
      | http://www.bbc.co.uk | EC4A 2BB | EC4A    |
      | http://www.bbc.co.uk | W1A 1AA  | W1A     |
      | http://www.bbc.co.uk | EC4R     | EC4R    |
      | http://www.bbc.co.uk | EC4R     | EC4R    |
      | http://www.bbc.co.uk | EC4R     | EC4R    |
      | http://www.bbc.co.uk | EC4R     | EC4R    |
      | http://www.bbc.co.uk | EC4R     | EC4R    |
      | http://www.bbc.co.uk | EC4R     | EC4R    |
      | http://www.bbc.co.uk | EC4R     | EC4R    |
      | http://www.bbc.co.uk | EC4R     | EC4R    |