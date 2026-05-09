import requests

def fetch_pincode_details(pincode: str):
    try:
        url = f"https://api.postalpincode.in/pincode/{pincode}"
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36)"}
        response = requests.get(url, headers=headers, timeout=5)
        
        if response.status_code == 200:
            data = response.json()
            if data and data[0].get("Status") == "Success":
                return data[0].get("PostOffice")
    except Exception as e:
        print(f"External API Error: {e}")
        
    # Fallback mock data if the API fails or blocks the request
    return [
        {
            "Name": "Mock Post Office (API Failed)",
            "BranchType": "Sub Post Office",
            "DeliveryStatus": "Delivery",
            "District": "Mock District",
            "State": "Mock State"
        }
    ]
