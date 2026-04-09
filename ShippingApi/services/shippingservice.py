def calculate_shipping(city: str, weight: float):
    base_cost = 5

    if city.lower() == "guatemala":
        multiplier = 1.0
    else:
        multiplier = 1.75

    return round(base_cost + (weight * multiplier), 2)