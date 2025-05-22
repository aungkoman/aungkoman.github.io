---
layout: post
title: "Tourism in Thailand - Tech Stack Analysis"
date: 2025-05-22
categories: research
---

## Main Website

https://www.tourismthailand.org/


## Home Page API List


https://api.tourismthailand.org/api/explore/get_recommended_trip?Language=en&timestamp=1747932000600

```json
{
  "response_code": 200,
  "response_msg": "Success",
  "result": [
    {
      "id": "321",
      "name": "Recommended Route to Meet & Greet with Nong Moo Deng  Chiang Mai to Chonburi (2 Days, 1 Night) ✈️ ",
      "slug": "recommended-route-to-meet-greet-with-nong-moo-deng-chiang-mai-to-chonburi-2-days-1-night",
      "thumb_image": {
        "title": "82a1815c-843b-431b-b390-b2a35e882c21.png",
        "description": "Recommended Route to Meet & Greet with Nong Moo Deng ",
        "url": "https://dmc.tatdataapi.io/assets/82a1815c-843b-431b-b390-b2a35e882c21.png"
      }
    },
    {
      "id": "320",
      "name": "Recommended Route to Meet & Greet with Nong Moo Deng  Nakhon Sawan to Chonburi (3 Days, 2 Nights) ???? ",
      "slug": "recommended-route-to-meet-greet-with-nong-moo-deng-nakhon-sawan-to-chonburi-3-days-2-nights",
      "thumb_image": {
        "title": "a1c359d0-e44e-46b5-9106-2af83a4ad80c.png",
        "description": "Recommended Route to Meet & Greet with Nong Moo Deng",
        "url": "https://dmc.tatdataapi.io/assets/a1c359d0-e44e-46b5-9106-2af83a4ad80c.png"
      }
    },
    {
      "id": "319",
      "name": "Recommended Route to Meet & Greet with Nong Moo Deng Samut Prakan - Chonburi (2 Days, 1 Night)",
      "slug": "recommended-route-to-meet-greet-with-nong-moo-deng-samut-prakan-chonburi-2-days-1-night",
      "thumb_image": {
        "title": "71f4ec78-63d5-4544-9777-0a7d2ec48e05.png",
        "description": "Recommended Route to Meet & Greet with Nong Moo Deng Samut Prakan - Chonburi",
        "url": "https://dmc.tatdataapi.io/assets/71f4ec78-63d5-4544-9777-0a7d2ec48e05.png"
      }
    }
  ]
}
```

https://api.tourismthailand.org/api/promotion/get_list?Language=en&timestamp=1747932000600
```json
{
  "response_code": 200,
  "response_msg": "Success",
  "result": {
    "pagination": {
      "perpage": 50,
      "page": 1,
      "total_page": 1,
      "total_items": 30
    },
    "list": [
      {
        "id": "106",
        "has_promotion_code": "1",
        "name": "Exclusive Thailand DMC Partnership for UAE Travel Agents – 5% Commission & Customizable Packages",
        "slug": "exclusive-thailand-dmc-partnership-for-uae-travel-agents-5-commission-customizable-packages",
        "description": "\u003Cp style=\"text-align:justify;\"\u003E\u003Cstrong\u003EPartner with \u003C/strong\u003E\u003Ca href=\"https://www.explera.co.th\"\u003E\u003Cstrong\u003EThailand’s Premier DMC\u003C/strong\u003E\u003C/a\u003E\u003Cstrong\u003E – Explera \u003C/strong\u003E\u003Ca href=\"https://www.explera.co.th\"\u003E\u003Cstrong\u003EInbound Thailand Company\u003C/strong\u003E\u003C/a\u003E\u003Cbr\u003E\u003Cbr\u003EAs a \u003Ca href=\"https://www.explera.co.th\"\u003Etrusted Thailand DMC\u003C/a\u003E for UAE travel agents, we specialize in delivering bespoke travel experiences for your clients. Whether they seek luxury escapes, cultural immersion, or corporate MICE \u003Cstrong\u003E(Meetings, Incentives, Conventions)\u003C/strong\u003E tours, our inbound Thailand company ensures seamless logistics, competitive pricing, and 24/7 Arabic-speaking support.\u003C/p\u003E\u003Cp style=\"text-align:justify;\"\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EWhy UAE Travel Agents Choose Us:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E5% Commission Guaranteed: Earn on every booking, regardless of group size.\u003C/li\u003E\u003Cli\u003ETailored Itineraries: Focus on Halal-friendly hotels, private guides, or niche interests (e.g., Thai wellness retreats, adventure tours).\u003C/li\u003E\u003Cli\u003EFree Pre-Trip Site Inspections: Exclusive for UAE agents in Dubai, Abu Dhabi, Sharjah, and Ajman (valid for 2024 bookings).\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EUAE-Centric Packages:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EDubai Travel Agents: Highlight our \"\u003Ca href=\"https://www.explera.co.th\"\u003E\u003Cstrong\u003ELuxury Bangkok &amp; Phuket\u003C/strong\u003E\u003C/a\u003E\" package with private \u003Ca href=\"https://www.explera.co.th\"\u003Eyacht tours\u003C/a\u003E and VIP airport transfers.\u003C/li\u003E\u003Cli\u003EAbu Dhabi Travel Agents: Promote \"\u003Ca href=\"https://www.explera.co.th\"\u003E\u003Cstrong\u003ECultural Thailand\u003C/strong\u003E\u003C/a\u003E\" tours featuring Ayutthaya temples and traditional Thai cooking classes.\u003C/li\u003E\u003Cli\u003ESharjah Travel Agents: Offer \"Family-Friendly Thailand\" itineraries with kid-friendly resorts and activities.\u003C/li\u003E\u003C/ul\u003E",
        "condition": "\u003Cp\u003E\u003Ca href=\"https://www.explera.co.th\"\u003E\u003Cstrong\u003EExplera DMC\u003C/strong\u003E\u003C/a\u003E\u003Cstrong\u003E - Asia's Destinations Management Company\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EHow to Book\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EEmail: Send client requirements (dates, group size, preferences) to \u003Ca href=\"mailto:b2b@explera.co.th\"\u003Eb2b@explera.co.th\u003C/a\u003E\u003C/li\u003E\u003Cli\u003ESubject Line: \u003Cstrong\u003E“Promo Code: UAE2025/25-TAT-WEB – [Your Agency Name]”.\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003EResponse Time: Receive a customized quote within 24 working hours.\u003C/li\u003E\u003Cli\u003EFlat 5% commission on all confirmed bookings.\u003C/li\u003E\u003Cli\u003ECommission paid within 30 days of trip completion.\u003C/li\u003E\u003Cli\u003EValid only for UAE-registered travel agencies.\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E",
        "start_date": "2025-05-09",
        "end_date": "2026-06-30",
        "discount_type": "percent",
        "discount_percent": "2",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "86",
        "alt_text": "Thailand is not an easy place to visit for people with reduced mobility or other physical challenges.",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-05-13 10:25:56",
        "thumbnail_file": {
          "id": "37001",
          "title": "94511f8016da766d1f23eaf3747124ac.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/37001/94511f8016da766d1f23eaf3747124ac.jpeg",
          "file_type": "image/jpeg",
          "file_size": "142276",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2025-05-10 01:19:10",
        "datetime_updated": "2025-05-13 10:25:56"
      },
      {
        "id": "94",
        "has_promotion_code": "1",
        "name": "Villa Booking in Thailand – Discover Luxury Across Top Destinations",
        "slug": "villa-booking-in-thailand-discover-luxury-across-top-destinations",
        "description": "\u003Cp\u003E\u003Cstrong\u003EExperience the ultimate in luxury, comfort, and cultural immersion with villa bookings across Thailand. Each city offers its own unique charm, ensuring an unforgettable stay no matter where you choose to go. From the tropical beaches of Phuket to the cultural landscapes of Chiang Mai, Thailand’s villas cater to every type of traveler.\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EPhuket Villa Booking – The Pearl of the Andaman\u003C/strong\u003E\u003Cbr\u003EPhuket is famed for its picturesque beaches, vibrant nightlife, and luxury villas offering breathtaking views of the Andaman Sea. Whether you're staying in Patong, Kata, or Kamala, Phuket's villas promise an exclusive experience.\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003ETop Features of Phuket Villas:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EPrivate infinity pools\u003C/li\u003E\u003Cli\u003EBeachfront access\u003C/li\u003E\u003Cli\u003EFull concierge services\u003C/li\u003E\u003Cli\u003EClose proximity to attractions like Big Buddha and Old Phuket Town\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EKrabi Villa Booking – Nature’s Tranquil Escape\u003C/strong\u003E\u003Cbr\u003EKrabi is renowned for its dramatic limestone cliffs and stunning beaches, making it an idyllic spot for villa stays. Choose from locations such as Ao Nang, Railay Beach, or Koh Lanta for a serene retreat.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cstrong\u003ETop Features of Krabi Villas:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EPanoramic views of limestone formations\u003C/li\u003E\u003Cli\u003EEasy access to Krabi’s attractions like Railay Beach and the Emerald Pool\u003C/li\u003E\u003Cli\u003ELush outdoor spaces and private gardens\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EKoh Samui Villa Booking – Island Luxury\u003C/strong\u003E\u003Cbr\u003EKoh Samui’s tropical beauty is complemented by private villas that offer luxury and relaxation. From Chaweng to Bophut, these villas provide exceptional comfort with seamless beach access.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ETop Features of Koh Samui Villas:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EOpen-plan designs with ocean views\u003C/li\u003E\u003Cli\u003EPrivate chefs and spa services\u003C/li\u003E\u003Cli\u003EDirect beach access with various water activities\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EChiang Mai Villa Booking – The Cultural Haven\u003C/strong\u003E\u003Cbr\u003EChiang Mai combines rich history with luxurious living. Villas here offer a unique mix of modern amenities and traditional Thai architecture, perfect for those seeking culture and tranquility.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ETop Features of Chiang Mai Villas:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003ETraditional Thai decor with modern touches\u003C/li\u003E\u003Cli\u003EClose to top temples like Wat Phra Singh and Doi Suthep\u003C/li\u003E\u003Cli\u003EPrivate gardens with mountain views\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EChiang Rai Villa Booking – A Northern Retreat\u003C/strong\u003E\u003Cbr\u003EFor a peaceful escape surrounded by art and nature, Chiang Rai’s villas are an excellent choice. These accommodations offer serenity and are situated near iconic sites like the White Temple and the Golden Triangle.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ETop Features of Chiang Rai Villas:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EArtistic and tranquil settings\u003C/li\u003E\u003Cli\u003EUnique, locally-inspired architecture\u003C/li\u003E\u003Cli\u003EEasy access to local attractions and guided cultural tours\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EBangkok Villa Booking – Urban Luxury\u003C/strong\u003E\u003Cbr\u003EExperience the bustling energy of Bangkok with a touch of private luxury. Villas in the capital provide a peaceful oasis amidst the city’s dynamic atmosphere, combining modern facilities with close proximity to top attractions.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ETop Features of Bangkok Villas:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003ESpacious, contemporary interiors\u003C/li\u003E\u003Cli\u003ERooftop pools with city views\u003C/li\u003E\u003Cli\u003EConvenient locations near the Grand Palace and Wat Arun\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\u003C/p\u003E\u003Cp\u003E#villa booking Bangkok, #luxury villas Bangkok, #private villas Bangkok, #Bangkok city villas, #villa rental Chiang Rai, #luxury villas Chiang Rai, #Chiang Rai vacation villas, #private villa Chiang Rai, #Chiang Mai villa booking, #luxury villas Chiang Mai, #mountain view villa Chiang Mai, #Chiang Mai cultural villas, #Koh Samui villa rental, #luxury villas Koh Samui, #beachfront villa Koh Samui, #private villa Koh Samui, #villa rental Krabi, #luxury villas in Krabi, #beachfront villa Krabi, #Krabi private villas, #villa booking Phuket, #luxury villas Phuket, #beachfront villa Phuket, #Phuket private villas, #expleradmc, #expleratha #expleravacations #topthailanddcm, #thailanddmc,&nbsp;\u003Cbr\u003E_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\u003Cbr\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EEXPLERA VACCATIONS CO LTD - THAILAND DMC &nbsp;-&nbsp;\u003C/strong\u003E\u003Ca href=\"https://www.explera.co.th\"\u003Ehttps://www.explera.co.th\u003C/a\u003E\u003Cbr\u003E\u003Cstrong\u003EA UNIT OF EXPLERA DMC &nbsp;- &nbsp;\u003C/strong\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003Ehttps://www.expleradmc.com\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E\u003Cp\u003Emails us : \u003Ca href=\"mailto:b2b@expleradmc.com \"\u003Eb2b@expleradmc.com&nbsp;\u003C/a\u003E\u003Cbr\u003Email us : \u003Ca href=\"mailto:thailand@expleradmc.com\"\u003Ethailand@expleradmc.com\u003C/a\u003E, &nbsp; &nbsp;&nbsp;\u003Ca href=\"mailto:ops.thailand@explera.co.th\"\u003Eops.thailand@explera.co.th\u003C/a\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E&nbsp;\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003Ehttps://www.expleradmc.com\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2024-11-03",
        "end_date": "2026-11-27",
        "discount_type": "percent",
        "discount_percent": "20",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "1848",
        "alt_text": "",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "1",
        "total_limit": "50000",
        "used": "7",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2024-11-04 10:28:03",
        "thumbnail_file": {
          "id": "33274",
          "title": "ffa7ea1539c9548b5aa9ab0e4c1180d4.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/33274/ffa7ea1539c9548b5aa9ab0e4c1180d4.jpeg",
          "file_type": "image/jpeg",
          "file_size": "257564",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2024-11-03 14:53:05",
        "datetime_updated": "2025-05-05 15:07:09"
      },
      {
        "id": "105",
        "has_promotion_code": "0",
        "name": "Wellness Retreats Near Bangkok | 2–7 Days All-Inclusive Healing Getaways",
        "slug": "wellness-retreats-near-bangkok-2-7-days-all-inclusive-healing-getaways",
        "description": "\u003Cp\u003ERecharge your body and mind at Sanpudard Health &amp; Wellness Club, an affordable and exclusive wellness retreat just outside Bangkok.\u003Cbr\u003EStay in your own private forest villa, enjoy daily Thai massages, fitness sessions with certified sport scientists, hydrothermal therapy, forest bathing, and healthy full-board meals – all included in one price.\u003C/p\u003E\u003Cp\u003EAvailable exclusively through Bangkok Health Service.\u003C/p\u003E\u003Ch4\u003E\u003Cstrong\u003EHighlights\u003C/strong\u003E\u003C/h4\u003E\u003Cul\u003E\u003Cli\u003EPrivate Forest Villa Accommodation\u003C/li\u003E\u003Cli\u003EFull-Board Healthy Thai Meals &amp; Detox Snacks\u003C/li\u003E\u003Cli\u003EDaily Thai Massage, Aroma Therapy &amp; Herbal Steam\u003C/li\u003E\u003Cli\u003EFitness Sessions with Certified Sport Scientists\u003C/li\u003E\u003Cli\u003EHydrothermal Therapy, Forest Bathing &amp; Aqua Aerobics\u003C/li\u003E\u003Cli\u003EOptional: Roundtrip Airport Transfers (Suvarnabhumi Airport)\u003C/li\u003E\u003Cli\u003EOptional: Health Assessment (Bioscan)\u003C/li\u003E\u003C/ul\u003E\u003Ch4\u003E\u003Cstrong\u003EProgram Options\u003C/strong\u003E\u003C/h4\u003E\u003Cfigure class=\"table\"\u003E\u003Ctable\u003E\u003Ctbody\u003E\u003Ctr\u003E\u003Ctd rowspan=\"2\"\u003EPROGRAM\u003C/td\u003E\u003Ctd\u003EPROGRAM 1\u003C/td\u003E\u003Ctd\u003EPROGRAM 2\u003C/td\u003E\u003Ctd\u003EPROGRAM 3\u003C/td\u003E\u003Ctd\u003EPROGRAM 4\u003C/td\u003E\u003Ctd\u003EPROGRAM 5\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003E2 DAYS 1 NIGHTS\u003C/td\u003E\u003Ctd\u003E3 DAYS 2 NIGHTS\u003C/td\u003E\u003Ctd\u003E3 DAYS 2 NIGHTS\u003C/td\u003E\u003Ctd\u003E5 DAYS 4 NIGHTS\u003C/td\u003E\u003Ctd\u003E7 DAYS 6 NIGHTS\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EFOREST VILLA NIGHTS\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E4\u003C/td\u003E\u003Ctd\u003E6\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EHIMALAYAN PINK SALT PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E3\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003ETHAI HERBAL STEAM PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E3\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003ETHAI MASSAGE PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E-\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EAROMA MASSAGE PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E-\u003C/td\u003E\u003Ctd\u003E-\u003C/td\u003E\u003Ctd\u003E-\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EFITNESS WITH SPORT SCIENTIST PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E4\u003C/td\u003E\u003Ctd\u003E6\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EAQUA AEROBICS WITH SPORT SCIENTIST PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E-\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EHYDROTHERMAL THERAPY PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E4\u003C/td\u003E\u003Ctd\u003E6\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EFOREST BATHING PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003ESUNBATHE PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E4\u003C/td\u003E\u003Ctd\u003E6\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EBIOSCAN PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E-\u003C/td\u003E\u003Ctd\u003E-\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EBREAKFAST PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E4\u003C/td\u003E\u003Ctd\u003E6\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003ELUNCH PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E-\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E3\u003C/td\u003E\u003Ctd\u003E5\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EDINNER PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E1\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E2\u003C/td\u003E\u003Ctd\u003E4\u003C/td\u003E\u003Ctd\u003E6\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EAPPETIZERS AND HEALTHY DRINKS PER PERSON&nbsp;\u003C/td\u003E\u003Ctd\u003E-\u003C/td\u003E\u003Ctd\u003E4\u003C/td\u003E\u003Ctd\u003E4\u003C/td\u003E\u003Ctd\u003E8\u003C/td\u003E\u003Ctd\u003E12\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003ESINGLE PERSON IN VILLA, Price in THB\u003C/td\u003E\u003Ctd\u003E9990\u003C/td\u003E\u003Ctd\u003E21900\u003C/td\u003E\u003Ctd\u003E23900\u003C/td\u003E\u003Ctd\u003E42900\u003C/td\u003E\u003Ctd\u003E59900\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003ETWO PERSONS IN ONE VILLA, Price in THB\u003C/td\u003E\u003Ctd\u003E15900\u003C/td\u003E\u003Ctd\u003E33900\u003C/td\u003E\u003Ctd\u003E37900\u003C/td\u003E\u003Ctd\u003E66900\u003C/td\u003E\u003Ctd\u003E94900\u003C/td\u003E\u003C/tr\u003E\u003C/tbody\u003E\u003C/table\u003E\u003C/figure\u003E\u003Ch4\u003E\u003Cbr\u003EHow to Book\u003C/h4\u003E\u003Cp\u003ELet us arrange everything for you.\u003Cbr\u003EContact Bangkok Health Service to book your wellness retreat today:\u003C/p\u003E\u003Cp\u003EWhatsApp/Phone: +66 (0) 955 291 915\u003Cbr\u003E\u003Ca href=\"https://bangkokhealthservice.com/affordable-all-inclusive-wellness-retreat-near-bangkok-reclaim-your-health-with-a-wellness-package-2025/\"\u003EVisit Website\u003C/a\u003E\u003Cbr\u003EEmail: info@bangkokhealthservice.com\u003C/p\u003E\u003Cp\u003E➡️ \u003Ca href=\"https://bangkokhealthservice.com/wp-content/uploads/2025/04/Brochure-Bangkok-Health-Service-Sanpudard-Health-and-Wellness-Club-All-Inclusive-Packages.pdf\"\u003EDownload Full Brochure (PDF)\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E",
        "condition": "\u003Ch4\u003E\u003Cstrong\u003ETerms and Conditions\u003C/strong\u003E\u003C/h4\u003E\u003Cul\u003E\u003Cli\u003EAll prices are in Thai Baht (THB) and inclusive of service charges and taxes.\u003C/li\u003E\u003Cli\u003EPackages are available exclusively through Bangkok Health Service.\u003C/li\u003E\u003Cli\u003EAdvance booking is required (minimum 7 days before arrival).\u003C/li\u003E\u003Cli\u003ESubject to villa availability at Sanpudard Health &amp; Wellness Club.\u003C/li\u003E\u003Cli\u003ERoundtrip airport transfer from Suvarnabhumi Airport, from 500 THB.\u003C/li\u003E\u003Cli\u003EPrograms are non-refundable once booked but can be rescheduled with a minimum 14 days' notice (subject to availability).\u003C/li\u003E\u003Cli\u003EFlight tickets are not included in the package price.\u003C/li\u003E\u003Cli\u003EOptional health assessment (Bioscan) is available for an additional fee.\u003C/li\u003E\u003Cli\u003ETravel insurance is highly recommended and can be arranged separately.\u003C/li\u003E\u003Cli\u003EBangkok Health Service reserves the right to change or update package details without prior notice.\u003C/li\u003E\u003C/ul\u003E",
        "start_date": "2025-04-28",
        "end_date": "2025-12-31",
        "discount_type": "percent",
        "discount_percent": "25",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "234",
        "alt_text": "",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40891",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "50362",
        "approver_id": "1124",
        "owner_id": "50362",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-04-30 09:18:06",
        "thumbnail_file": {
          "id": "36871",
          "title": "805b42c0ef1f7fcbf790f64b7a305825.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/36871/805b42c0ef1f7fcbf790f64b7a305825.jpeg",
          "file_type": "image/jpeg",
          "file_size": "149336",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Bangkok Health Service Co., Ltd.",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2025-04-28 12:07:18",
        "datetime_updated": "2025-04-30 09:18:06"
      },
      {
        "id": "103",
        "has_promotion_code": "0",
        "name": "THAILAND TOP SELLING TOURS – EXPLORE WITH EXPLERA DMC",
        "slug": "thailand-top-selling-tours-explore-with-explera-dmc",
        "description": "\u003Cp style=\"text-align:justify;\"\u003E\u003Cstrong\u003EDiscover Unforgettable Moments Across Bangkok, Pattaya, Phuket, Krabi &amp; Koh Samui\u003C/strong\u003E\u003Cbr\u003EPowered by Explera DMC – Your Trusted Thailand DMC Partner\u003Cbr\u003E\u003Cbr\u003EExperience Thailand like never before with Explera DMC’s top-selling tour collection. From the vibrant streets of Bangkok to the sun-kissed beaches of Phuket and the serene islands of Koh Samui, our curated tours offer adventure, luxury, and cultural immersion. Ride the waves to Phi Phi Islands, enjoy ziplining in Phuket, meet tigers at Tiger Park Pattaya, or cruise the Chao Phraya River in style — all handpicked for unforgettable memories.\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EPopular Experiences Include:\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EBangkok: Safari World, Mahanakhon Skywalk, Dinner Cruises|\u003Cbr\u003EPattaya: Coral Island Tour, Alcazar Cabaret, Tiger Park\u003Cbr\u003EPhuket: James Bond Island, FantaSea Show, Andamanda Water Park\u003Cbr\u003EKrabi: 4-Island Tours, Jungle Trek, Sunset Cruises\u003Cbr\u003EKoh Samui: Angthong Marine Park, Elephant Sanctuary, Full Moon Parties\u003Cbr\u003E&nbsp;\u003C/p\u003E\u003Cp style=\"text-align:justify;\"\u003EBook with Explera DMC and enjoy expert local services, seamless transfers, multilingual support, and unbeatable pricing. Ideal for FITs, groups, and MICE travel.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cbr\u003E_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EExplera DMC - Asia's Destinations Management Company&nbsp;\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"mailto:b2b@explera.co.th\"\u003E\u003Cstrong\u003Eb2b@explera.co.th\u003C/strong\u003E\u003C/a\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Ca href=\"https://www.explera.co.th\"\u003Ehttps://www.explera.co.th\u003C/a\u003E\u003Cbr\u003E\u003Ca href=\"https://www.explera.co.th/destinations\"\u003Ehttps://www.explera.co.th/destinations\u003C/a\u003E\u003Cbr\u003E&nbsp;\u003C/p\u003E",
        "condition": "\u003Cp style=\"text-align:justify;\"\u003EPrices include tour services, entry fees, guide, and transfers (as per tour inclusion).\u003Cbr\u003EThis promotion is valid from 1st May 2025 to 31st October 2025 only. Subject to availability. Booking in advance is recommended.\u003C/p\u003E",
        "start_date": "2025-04-11",
        "end_date": "2027-04-16",
        "discount_type": "percent",
        "discount_percent": "7",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "662",
        "alt_text": "Most tours are family-friendly and suitable for all age groups. Wheelchair accessibility is available for selected attractions like Madame Tussauds, Mahanakhon Skywalk, and Chao Phraya Cruises. Guests are encouraged to notify special requirements at the time of booking for personalized support.",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-04-18 09:22:37",
        "thumbnail_file": {
          "id": "36600",
          "title": "2b3229e265b365545f54e68ac513bb15.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/36600/2b3229e265b365545f54e68ac513bb15.jpeg",
          "file_type": "image/jpeg",
          "file_size": "148117",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2025-04-11 15:54:04",
        "datetime_updated": "2025-04-18 09:22:37"
      },
      {
        "id": "104",
        "has_promotion_code": "0",
        "name": "Thailand's Top Pattaya Tours – Unforgettable Beachside Adventures!",
        "slug": "thailand-s-top-pattaya-tours-unforgettable-beachside-adventures",
        "description": "\u003Cp\u003E1. Coral Island Tour – Tropical Paradise Escape&nbsp;\u003Cbr\u003E\u003Ca href=\"https://explera.co.th/shop/coral-island-tour-pattaya\"\u003EBook Now&nbsp;\u003C/a\u003E\u003Cbr\u003EExperience: Cruise to stunning Coral Island with its powder-white beaches and crystal waters. Enjoy snorkeling, swimming, and beachside relaxation in this island paradise.&nbsp;\u003Cbr\u003E✅ Conditions: Includes round-trip boat transfer. Water activities at own expense.&nbsp;\u003Cbr\u003E\u003Cbr\u003E2. Alcazar Cabaret Show – World-Famous Performance&nbsp;\u003Cbr\u003E\u003Ca href=\"https://explera.co.th/shop/alcazar-carbet-show-pattaya\"\u003EBook Now&nbsp;\u003C/a\u003E\u003Cbr\u003EExperience: Be amazed by Pattaya's most spectacular cabaret show featuring elaborate costumes, dazzling dance routines, and stunning stage productions.&nbsp;\u003Cbr\u003E✅ Conditions: VIP seating available. Children under 5 not permitted.&nbsp;\u003Cbr\u003E\u003Cbr\u003E3. Dolphinarium Pattaya – Marine Life Spectacle&nbsp;\u003Cbr\u003E\u003Ca href=\"https://explera.co.th/shop/dolphinarium-pattaya\"\u003E&nbsp;Book Now&nbsp;\u003C/a\u003E\u003Cbr\u003EExperience: Watch intelligent dolphins and seals perform incredible tricks in an entertaining show perfect for families and animal lovers.&nbsp;\u003Cbr\u003E✅ Conditions: Shows run 3 times daily. Arrive 30 mins early for best seats.&nbsp;\u003Cbr\u003E\u003Cbr\u003E4. Nong Nooch Village – Cultural &amp; Botanical Wonderland&nbsp;\u003Cbr\u003E\u003Ca href=\"https://explera.co.th/shop/nong-nooch-village-tour-pattaya\"\u003EBook Now&nbsp;\u003C/a\u003E\u003Cbr\u003EExperience: Explore beautiful gardens, Thai cultural shows, and elephant performances at one of Thailand's most famous tropical parks.&nbsp;\u003Cbr\u003E✅ Conditions: Elephant show included. Comfortable walking shoes recommended.&nbsp;\u003Cbr\u003E\u003Cbr\u003E5. Tiger Park Pattaya – Majestic Big Cat Encounters&nbsp;\u003Cbr\u003E\u003Ca href=\"https://explera.co.th/shop/tiger-park-pattaya\"\u003E&nbsp;Book Now&nbsp;\u003C/a\u003E\u003Cbr\u003EExperience: Get up close with magnificent tigers in a safe environment. Choose from cub interactions or photo sessions with adult tigers.&nbsp;\u003Cbr\u003E✅ Conditions: Strict safety rules apply. Professional photos available for purchase.&nbsp;\u003Cbr\u003E\u003Cbr\u003E6. Underwater World Pattaya – Oceanic Adventure&nbsp;\u003Cbr\u003E\u003Ca href=\"https://explera.co.th/shop/underwater-world-pattaya\"\u003E&nbsp;Book Now&nbsp;\u003C/a\u003E\u003Cbr\u003EExperience: Walk through Asia's largest underwater tunnel surrounded by sharks, rays, and thousands of tropical fish in this mesmerizing aquarium.&nbsp;\u003Cbr\u003E✅ Conditions: Family packages available. Last entry 1 hour before closing.\u003C/p\u003E",
        "condition": "\u003Cp\u003E1. Coral Island Tour – Tropical Paradise Escape&nbsp;\u003Cbr\u003E✅ Conditions: Includes round-trip boat transfer. Water activities at own expense.&nbsp;\u003Cbr\u003E\u003Cbr\u003E2. Alcazar Cabaret Show – World-Famous Performance&nbsp;\u003Cbr\u003E✅ Conditions: VIP seating available. Children under 5 not permitted.&nbsp;\u003Cbr\u003E\u003Cbr\u003E3. Dolphinarium Pattaya – Marine Life Spectacle&nbsp;\u003Cbr\u003E✅ Conditions: Shows run 3 times daily. Arrive 30 mins early for best seats.&nbsp;\u003Cbr\u003E\u003Cbr\u003E4. Nong Nooch Village – Cultural &amp; Botanical Wonderland&nbsp;\u003Cbr\u003E✅ Conditions: Elephant show included. Comfortable walking shoes recommended.&nbsp;\u003Cbr\u003E\u003Cbr\u003E5. Tiger Park Pattaya – Majestic Big Cat Encounters&nbsp;\u003Cbr\u003E✅ Conditions: Strict safety rules apply. Professional photos available for purchase.&nbsp;\u003Cbr\u003E\u003Cbr\u003E6. Underwater World Pattaya – Oceanic Adventure&nbsp;\u003Cbr\u003E✅ Conditions: Family packages available. Last entry 1 hour before closing.\u003C/p\u003E",
        "start_date": "2025-04-01",
        "end_date": "2025-10-31",
        "discount_type": "percent",
        "discount_percent": "7",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "481",
        "alt_text": "",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-04-18 09:22:31",
        "thumbnail_file": {
          "id": "36611",
          "title": "71df8cfc9597b32ec918bce4bc482352.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/36611/71df8cfc9597b32ec918bce4bc482352.jpeg",
          "file_type": "image/jpeg",
          "file_size": "180099",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2025-04-11 18:03:48",
        "datetime_updated": "2025-04-18 09:22:31"
      },
      {
        "id": "90",
        "has_promotion_code": "1",
        "name": "Family Fun - Kids Stay Free!",
        "slug": "family-fun-kids-stay-free",
        "description": "\u003Cp\u003EMake this family vacation one to remember with Explera Vacations Co. Ltd.! With our Family Fun promotion, you can bring the whole family for an unforgettable trip to Thailand, and kids under 12 stay for free. Explore the best that Thailand has to offer, from its stunning beaches to vibrant cultural experiences, without worrying about extra accommodation costs for the little ones.\u003C/p\u003E\u003Cp\u003EOur specially curated family packages include stays at top-rated, family-friendly resorts in Thailand’s most popular destinations, such as Phuket, Krabi, and Bangkok. Each package is designed with families in mind, providing comfortable accommodations, activities that kids will love, and excursions that the whole family can enjoy together.\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EWhat to Expect with Our Family Packages:\u003C/strong\u003E\u003Cbr\u003E• Comfortable Accommodation: Stay at leading family-friendly resorts that offer spacious rooms, fun amenities, and activities for children.\u003Cbr\u003E• Complimentary Daily Breakfast: Start your day with a delicious breakfast, included for both adults and kids.\u003Cbr\u003E• Exciting Family Activities: Access to a range of activities such as snorkeling, guided nature tours, beach games, and more.\u003Cbr\u003E• Convenient Transfers &amp; Tours: Enjoy hassle-free transfers from the airport to your hotel and popular attractions, making your travel experience smooth and stress-free.\u003Cbr\u003E• Dedicated Support: Our team is here to help throughout your journey, ensuring a seamless vacation experience for you and your loved ones.\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EHow to Redeem:\u003C/strong\u003E\u003Cbr\u003E1. Subject Line for Booking:\u003Cbr\u003E“Family Fun Promo - Kids Stay Free - Promo Code \u003Cstrong\u003EFAMILYFUN24-25EXPLERACO\u003C/strong\u003E”\u003Cbr\u003E2. Email for Booking:\u003Cbr\u003ESend your booking inquiries to \u003Ca href=\"mailto:enquiry@explera.co.th\"\u003Eenquiry@explera.co.th\u003C/a\u003E with the subject line mentioned above.\u003Cbr\u003E3. Enter Promo Code: Mention the promo code \u003Cstrong\u003EFAMILYFUN24-25EXPLERACO\u003C/strong\u003E in your email to apply the offer.\u003Cbr\u003E4. Receive Confirmation: Our team will process your booking and send a confirmation email with all the details of your family vacation.\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E#ExpleraVacations, #FamilyVacationThailand, #KidsStayFree, #ThailandDMC, #PhuketTravel, #FamilyTravelDeals, #VisitThailand, #BangkokHolidays, #FamilyFunThailand, #TravelWithKids, #ThailandTravelPackages, #ExplorePhuket, #FamilyGetaway, #AdventureThailand, #BookNowThailand.\u003Cbr\u003E\u003Cbr\u003EFamily vacation Thailand, Kids stay free Thailand, Explera Vacations Co. Ltd., Thailand DMC, Best travel agency Thailand, Thailand holiday packages, Family travel deals, Phuket family packages, Bangkok family tours, Book family package Thailand, Top DMC in Thailand, Kids-friendly resorts Thailand, Thailand travel 2024, Thailand family getaway, Adventure activities for kids Thailand.\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003ECompany Name:\u003C/strong\u003E Explera Vacations Co Ltd - A Best thailand DMC\u003Cbr\u003E\u003Cstrong\u003EAddress:\u003C/strong\u003E 55/119 Soi Phru Yai, Ratsada, Mueang Phuket District, Phuket 83000, Thailand\u003Cbr\u003E\u003Cstrong\u003EWebsite:\u003C/strong\u003E \u003Ca href=\"https://www.explera.co.th\"\u003Ehttps://www.explera.co.th\u003C/a\u003E\u003Cbr\u003E\u003Cstrong\u003EPhone Number: \u003C/strong\u003E\u003Ca href=\"wa.me/+66930711160\"\u003E\u003Cstrong\u003E+66 930711160\u003C/strong\u003E\u003C/a\u003E\u003Cbr\u003E\u003Cbr\u003E&nbsp;\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003EBooking Period:\u003C/strong\u003E\u003Cbr\u003ENow until 30th January 2025\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ETravel Period:\u003C/strong\u003E\u003Cbr\u003EValid for travel throughout 2024-2025\u003Cbr\u003E\u003Cbr\u003E• The offer is valid for children below 7 years when sharing a room with two paying adults.\u003Cbr\u003E• Free stays apply only when the booking is made through Explera Vacations Co. Ltd. using the promo code FAMILYFUN24.\u003Cbr\u003E• The booking request must be sent to enquiry@explera.co.th with the subject line “Family Fun Promo - Kids Stay Free - Promo Code FAMILYFUN24”.\u003Cbr\u003E• Offer is subject to availability; some blackout dates may apply.\u003Cbr\u003E• This promotion cannot be combined with other discounts or special offers.\u003Cbr\u003E• Free breakfast for children is included when dining with paying adults.\u003Cbr\u003E• The promotion is valid only for bookings made before 30th January 2025, with travel dates from 2024-2025.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EMake your family vacation dreams come true with this exclusive offer from Explera Vacations Co. Ltd.. Book today and let us help you create a perfect, hassle-free family holiday in Thailand!\u003C/strong\u003E\u003C/p\u003E",
        "start_date": "2024-10-10",
        "end_date": "2025-10-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "FAMILYFUN24-25EXPLERACO",
        "view": "2545",
        "alt_text": "",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "1",
        "total_limit": "100",
        "used": "1",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2024-10-15 21:40:08",
        "thumbnail_file": {
          "id": "33018",
          "title": "75417cd3bda07c6bacb6cbdcfd3cee59.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/33018/75417cd3bda07c6bacb6cbdcfd3cee59.jpeg",
          "file_type": "image/jpeg",
          "file_size": "138514",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2024-10-10 16:35:57",
        "datetime_updated": "2025-04-08 06:17:32"
      },
      {
        "id": "93",
        "has_promotion_code": "1",
        "name": "Exclusive Luxury Villa Promotions - TAT Thailand Website Users",
        "slug": "exclusive-luxury-villa-promotions-tat-thailand-website-users",
        "description": "\u003Cp\u003EExperience the pinnacle of luxury with our exclusive villa booking promotions in Thailand. Indulge in world-class amenities, personalized services, and the breathtaking beauty of Thailand's most sought-after locations. Whether you seek a serene beachside retreat or a vibrant city escape, our luxury and ultra-luxury villas offer unparalleled comfort and sophistication.\u003C/p\u003E\u003Cp\u003EBook with confidence knowing that \u003Ca href=\"https://www.explera.co.th\"\u003EExplera Vacations Co Ltd\u003C/a\u003E, an accredited DMC recognized by the Tourism Authority of Thailand (TAT), guarantees trust, reliability, and exceptional service. Our multilingual team, fluent in English, Russian, and French, is committed to providing seamless assistance and ensuring every detail of your stay is flawless. \u003Ca href=\"https://www.explera.co.th\"\u003EExplera Vacations Co Ltd\u003C/a\u003E, a \u003Ca href=\"https://www.explera.co.th\"\u003Ebest Thailand DMC\u003C/a\u003E specializes in luxury villa bookings, personalised tours, and world-class travel services tailored to meet the highest standards.\u003C/p\u003E\u003Cp\u003EWith extensive expertise in the Thai travel market, Explera Vacations Co Ltd, a \u003Ca href=\"https://www.explera.co.th\"\u003Ebest Thailand DMC\u003C/a\u003E is your premier choice for booking villas in top destinations such as Phuket, Krabi, Koh Samui, and Pattaya. Our commitment to excellence ensures each guest receives unparalleled service, complete privacy, and the highest quality accommodations. From luxury airport transfers to 24/7 concierge support, we take care of every aspect of your stay, so you can fully enjoy your Thai getaway.\u003C/p\u003E\u003Cp\u003EJoin the many satisfied international travelers who trust Explera Vacations for their luxury villa experiences. Our reputation for professionalism, attention to detail, and customer-centric approach makes us the leading provider for villa bookings in Thailand.\u003C/p\u003E\u003Cp\u003ESEO Keywords: Thailand villa booking, luxury villas in Thailand, villa rentals Phuket, luxury holiday homes, exclusive villa offers, Explera Vacations Co. Ltd., trusted DMC in Thailand, TAT-accredited travel agency, luxury travel services Thailand, multilingual travel assistance.\u003Cbr\u003E\u003Cbr\u003Email us : \u003Ca href=\"mailto:ceo@explera.co.th\"\u003Eceo@explera.co.th\u003C/a\u003E\u003Cbr\u003E\u003Cbr\u003Eour websites\u003Cbr\u003E\u003Ca href=\"https://www.explera.co.th\"\u003Ehttps://www.explera.co.th\u003C/a\u003E\u003Cbr\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003Ehttps://www.expleradmc.com\u003C/a\u003E\u003Cbr\u003E&nbsp;\u003C/p\u003E",
        "condition": "\u003Cul\u003E\u003Cli\u003EOffer valid for bookings made between 01/11/2024 to 15/10/2025.\u003C/li\u003E\u003Cli\u003EApplicable for stays between 01/11/2024 to 15/10/2025.\u003C/li\u003E\u003Cli\u003EPromotion applies to select luxury and ultra-luxury villas only.\u003C/li\u003E\u003Cli\u003EA minimum stay of 7 nights is required to qualify for the promotion.\u003C/li\u003E\u003Cli\u003EOffer is subject to availability and cannot be combined with other discounts or promotions.\u003C/li\u003E\u003Cli\u003EFull prepayment is required at the time of booking and is non-refundable.\u003C/li\u003E\u003Cli\u003EChanges to the booking are permitted up to 50 days before check-in, subject to availability and additional charges.\u003C/li\u003E\u003Cli\u003EComplimentary amenities and perks are subject to villa specifications and may vary.\u003C/li\u003E\u003Cli\u003EThe management reserves the right to modify or cancel the promotion at any time without prior notice.\u003C/li\u003E\u003Cli\u003EAll bookings are governed by the standard booking policies of Explera Vacations Co Ltd, a best Thailand DMC\u003C/li\u003E\u003C/ul\u003E",
        "start_date": "2024-11-02",
        "end_date": "2025-10-15",
        "discount_type": "percent",
        "discount_percent": "13",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "2887",
        "alt_text": "",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "4",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2024-11-04 10:28:43",
        "thumbnail_file": {
          "id": "33270",
          "title": "62bab24da73f8deb37521059822163d0.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/33270/62bab24da73f8deb37521059822163d0.jpeg",
          "file_type": "image/jpeg",
          "file_size": "205977",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2024-11-02 15:20:07",
        "datetime_updated": "2025-04-06 20:11:06"
      },
      {
        "id": "102",
        "has_promotion_code": "0",
        "name": "Tee Off in Thailand - Exclusive Golf Package  |  Explera DMC best thailand dmc",
        "slug": "tee-off-in-thailand-exclusive-golf-package-explera-dmc-best-thailand-dmc",
        "description": "\u003Cp style=\"text-align:justify;\"\u003EEmbark on an unforgettable golf journey through Thailand's top golfing destinations – Chiang Mai, Bangkok, and Phuket. This exclusive 6-night, 7-day package is designed for golf enthusiasts who seek luxury, relaxation, and world-class golfing in breathtaking locations.\u003C/p\u003E\u003Cp style=\"text-align:justify;\"\u003EWhether you're a seasoned player or a casual golfer, enjoy rounds of golf at some of Thailand’s finest courses, coupled with 5-star accommodations, seamless transportation, and premium services to make your experience truly extraordinary.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cbr\u003EDuration: 6 Nights / 7 Days\u003Cbr\u003EDestinations: Chiang Mai, Bangkok, Phuket\u003C/p\u003E\u003Cp\u003EExperience the ultimate golf getaway in Thailand! Enjoy a world-class golfing experience at some of the finest courses in Chiang Mai, Bangkok, and Phuket. Stay in luxurious 5-star hotels, play on pristine greens, and indulge in premium services designed for golf enthusiasts.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EPackage Inclusions:\u003C/strong\u003E\u003Cbr\u003E✔️ 5-Star Hotel Accommodation (Twin sharing basis)\u003Cbr\u003E✔️ Daily Breakfast\u003Cbr\u003E✔️ 4 Rounds of Golf (18 Holes per day)\u003Cbr\u003E✔️ Green Fee, Caddy Fee &amp; Golf Cart Included\u003Cbr\u003E✔️ Follower Fees Included\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EPrice:\u003C/strong\u003E\u003Cbr\u003E???? Starting from $899 per person (Minimum 2 persons required)\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003E???? For bookings &amp; inquiries:\u003C/strong\u003E\u003Cbr\u003E???? Email: \u003Ca href=\"mailto:b2b@expleradmc.com\"\u003Eb2b@expleradmc.com\u003C/a\u003E\u003Cbr\u003E???? Call/WhatsApp: \u003Ca href=\"wa.me/+66930711160\"\u003E+66 930711160\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E???? Visit us at: \u003Ca href=\"www.explera.co.th\"\u003Ewww.explera.co.th\u003C/a\u003E &nbsp; &nbsp;| &nbsp; &nbsp;\u003Ca href=\"www.expleradmc.com\"\u003Ewww.expleradmc.com\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cul\u003E\u003Cli\u003EPrices are subject to availability at the time of booking.\u003C/li\u003E\u003Cli\u003EFlights, visa fees, personal expenses, and travel insurance are not included.\u003C/li\u003E\u003Cli\u003EGolf course selections are subject to availability and may change.\u003C/li\u003E\u003Cli\u003EAny additional activities beyond the package may incur extra charges.\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003E???? Additional Information &amp; Conditions:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EFlights, visa fees, personal expenses, and travel insurance are not included.\u003C/li\u003E\u003Cli\u003EGolf courses and hotel selections may change based on availability.\u003C/li\u003E\u003Cli\u003EExtra rounds of golf, sightseeing, or special activities can be arranged upon request.\u003C/li\u003E\u003Cli\u003EPrivate airport transfers available upon request.\u003C/li\u003E\u003Cli\u003ENon-golfers (companions) can join the trip with customized activities.\u003Cbr\u003E&nbsp;\u003C/li\u003E\u003C/ul\u003E",
        "start_date": "2025-03-01",
        "end_date": "2025-08-31",
        "discount_type": "percent",
        "discount_percent": "7",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "1237",
        "alt_text": "At Explera Vacations, we believe that golf should be an inclusive experience for everyone. Our Tee Off in Thailand package is designed to ensure accessibility for all travelers, including those with mobility needs.",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-03-13 09:16:17",
        "thumbnail_file": {
          "id": "36080",
          "title": "86a868e15600d20975e2fb6350219352.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/36080/86a868e15600d20975e2fb6350219352.png",
          "file_type": "image/png",
          "file_size": "725667",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2025-03-10 17:37:01",
        "datetime_updated": "2025-03-13 09:16:17"
      },
      {
        "id": "91",
        "has_promotion_code": "1",
        "name": "???? Exclusive Offer: Get 5% Flat Off on All Packages with Explera Vacations Co., Ltd. - Your Trusted Thailand DMC ????????",
        "slug": "exclusive-offer-get-5-flat-off-on-all-packages-with-explera-vacations-co-ltd-your-trusted-thailand-dmc",
        "description": "\u003Cp\u003EAre you ready for an unforgettable holiday in Thailand? Now’s the perfect time! \u003Ca href=\"https://www.explera.co.th\"\u003EExplera Vacations Co Ltd\u003C/a\u003E your trusted \u003Ca href=\"https://www.explera.co.th\"\u003EThailand DMC\u003C/a\u003E, is offering an exclusive 5% flat discount on all packages. Whether you’re interested in \u003Ca href=\"https://www.explera.co.th\"\u003Einbound Thailand tourism\u003C/a\u003E, a beach escape, cultural exploration, or an adventurous getaway, our ready-made packages are designed to meet every traveler’s dream.\u003C/p\u003E\u003Cp\u003EWith Explera Vacations, not only do you get the best experiences, but you also save more! From the vibrant streets of Bangkok to the serene beaches of Phuket, and from the rich culture of Chiang Mai to the stunning Krabi coastlines, we have everything you need for the perfect vacation.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cstrong\u003EWhy Choose Explera Vacations as Your Thailand DMC?\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003E1. \u003Ca href=\"https://www.explera.co.th\"\u003ETAT Accredited DMC\u003C/a\u003E: We are accredited by the \u003Ca href=\"https://www.explera.co.th\"\u003ETourism Authority of Thailand (TAT)\u003C/a\u003E, guaranteeing a trusted and authentic travel experience.\u003Cbr\u003E2. Inbound Thailand Specialists: Whether you’re a solo traveler, couple, or group, we have packages for all.\u003Cbr\u003E3. Customizable Travel Packages: From \u003Ca href=\"https://www.explera.co.th\"\u003Eluxury Thailand packages\u003C/a\u003E to adventure-filled tours, all our packages can be tailored to your specific needs.\u003C/p\u003E\u003Cp\u003EExplore our ready-made travel packages and take advantage of the 5% discount:\u003Cbr\u003E\u003Cstrong\u003EVisit our Shop for \u003C/strong\u003E\u003Ca href=\"https://www.explera.co.th/shop\"\u003E\u003Cstrong\u003EOnline Activity Booking\u003C/strong\u003E\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cstrong\u003ETop Ready-Made Packages - Now with 5% Off:\u003C/strong\u003E\u003Cbr\u003E• Phuket Island Escape: Relax on beautiful beaches, enjoy thrilling water sports, and explore vibrant markets.\u003Cbr\u003E• Bangkok Cultural Tour: Discover the bustling streets, majestic temples, and lively markets of Bangkok.\u003Cbr\u003E• Chiang Mai Adventure: Experience northern Thailand’s natural beauty and culture through trekking and temple visits.\u003Cbr\u003E• Krabi Beach Retreat: Unwind on pristine beaches, surrounded by breathtaking limestone cliffs and crystal-clear waters.\u003Cbr\u003E• \u003Ca href=\"https://www.explera.co.th\"\u003ELuxury Thailand Experience\u003C/a\u003E: Treat yourself to a VIP experience with five-star accommodations, private tours, and exclusive services.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cstrong\u003E✨ Book now with \u003C/strong\u003E\u003Ca href=\"https://explera.co.th/blog/why-choose-a-thailand-dmc-for-your-next-adventure-the-complete-guide-to-inbound-thailand-tourism\"\u003E\u003Cstrong\u003EExplera Vacations\u003C/strong\u003E\u003C/a\u003E\u003Cstrong\u003E and enjoy a 5% flat discount on all packages! ✨\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cstrong\u003EOur Seamless Booking Process\u003C/strong\u003E\u003Cbr\u003EOur platform offers a user-friendly booking system where travel agents and individual travelers alike can easily book inbound Thailand travel packages. Start planning your trip today and save with our 5% flat discount!\u003Cbr\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003E???? Get in Touch with Us\u003C/strong\u003E\u003Cbr\u003EFor any inquiries, visit: Contact Us or explore our B2B platform: \u003Ca href=\"b2b.explera.co.th\"\u003EB2B Explera\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EExplera Vacations Co Ltd - A \u003C/strong\u003E\u003Ca href=\"https://www.explera.co.th\"\u003E\u003Cstrong\u003EThailand DMC\u003C/strong\u003E\u003C/a\u003E\u003Cbr\u003E55 119 Soi Phru Yai, Ratsada, Mueang Phuket District, Phuket 83000, Thailand\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EEmail: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Website.\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"mailto:enquiry@explera.co.th\"\u003Eenquiry@explera.co.th\u003C/a\u003E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\u003Ca href=\"https://www.explera.co.th\"\u003Ehttps://www.explera.co.th\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EWhatsApp :\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"wa.me/+66930711160\"\u003E+66 930711160\u003C/a\u003E\u003Cbr\u003E&nbsp;\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003E• Booking Period: \u003C/strong\u003EValid for bookings until October 2025.\u003Cbr\u003E\u003Cstrong\u003E• Stay Period:\u003C/strong\u003E Available for travel stays until October 2025.\u003Cbr\u003E\u003Cstrong\u003E• Advance Booking: \u003C/strong\u003EBook at least 15 days prior to arrival to guarantee availability.\u003Cbr\u003E\u003Cstrong\u003E• Hotel Availability:\u003C/strong\u003E All hotels are subject to availability at the time of booking. Alternatives will be provided in case of non-availability.\u003Cbr\u003E\u003Cstrong\u003E• Inclusions: \u003C/strong\u003EAll packages include accommodation, guided tours, and transfers unless stated otherwise.\u003Cbr\u003E\u003Cstrong\u003E• 5% Discount: \u003C/strong\u003EApplied automatically at checkout on all packages.\u003Cbr\u003E\u003Cstrong\u003E• B2C Offer Only:\u003C/strong\u003E This discount offer is exclusive to B2C (direct clients only). B2B clients are not eligible for this promotion.\u003Cbr\u003E\u003Cstrong\u003E• Cancellation Policy:\u003C/strong\u003E Cancellations made within 7 days of arrival may incur fees. Please contact us for further details.\u003Cbr\u003E&nbsp;\u003C/p\u003E",
        "start_date": "2024-10-16",
        "end_date": "2026-04-30",
        "discount_type": "percent",
        "discount_percent": "5",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "810",
        "alt_text": "",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "1",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-03-06 09:37:29",
        "thumbnail_file": {
          "id": "33090",
          "title": "bc122111bd72836d21c12dc41e17b1fa.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/33090/bc122111bd72836d21c12dc41e17b1fa.jpeg",
          "file_type": "image/jpeg",
          "file_size": "51212",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2025-10-16 14:02:33",
        "datetime_updated": "2025-03-06 09:37:29"
      },
      {
        "id": "101",
        "has_promotion_code": "1",
        "name": "Best Thailand DMC for Unforgettable Travel Experiences – Explera DMC",
        "slug": "best-thailand-dmc-for-unforgettable-travel-experiences-explera-dmc",
        "description": "\u003Cp\u003E\u003Cstrong\u003EWhy Choosing the Right DMC in Thailand Matters\u003C/strong\u003E\u003Cbr\u003EThailand, the Land of Smiles, is a top travel destination offering a diverse range of experiences, from bustling Bangkok city life to serene beaches in Phuket and Krabi, lush jungles in Chiang Mai, and vibrant cultural festivals. To ensure seamless travel planning, partnering with a trusted Thailand Destination Management Company (DMC) is crucial for both travel agencies and corporate event organizers.\u003C/p\u003E\u003Cp\u003EAt Explera DMC (Explera Vacations Co. Ltd.), we specialize in curating tailor-made travel experiences, offering end-to-end services, and ensuring seamless execution for FIT, groups, MICE, and luxury travelers.\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EExplera DMC – The Best Thailand DMC for Exceptional Services\u003C/strong\u003E\u003Cbr\u003EAs a \u003Ca href=\"https://www.expleradmc.com\"\u003Eleading Thailand DMC\u003C/a\u003E, Explera DMC is recognized for its local expertise, strong industry connections, and innovative travel solutions. Whether you're planning a luxurious getaway, corporate retreat, or an adventure-filled vacation, we deliver top-tier services to meet all travel requirements.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EWhy Explera DMC Stands Out?\u003C/strong\u003E\u003Cbr\u003E\u003Cstrong\u003EStrong Local Expertise\u003C/strong\u003E – With years of experience in Thailand’s tourism industry, we have exclusive insights and partnerships with premium hotels, resorts, transportation providers, and local attractions.\u003Cbr\u003ETailor-Made Travel Solutions – We design personalized itineraries for leisure travelers, corporate groups, and special interest tours.\u003Cbr\u003E\u003Cstrong\u003ECompetitive Pricing &amp; Exclusive Deals\u003C/strong\u003E – Our extensive network ensures the best rates for accommodations, activities, and excursions.\u003Cbr\u003E\u003Cstrong\u003ESeamless Logistics &amp; Operations\u003C/strong\u003E – From airport transfers to guided tours, we handle all operational aspects with precision.\u003Cbr\u003E\u003Cstrong\u003EMICE &amp; Luxury Travel Specialists\u003C/strong\u003E – Expertise in organizing corporate events, incentive programs, weddings, and high-end travel experiences.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cstrong\u003EComprehensive \u003C/strong\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003E\u003Cstrong\u003EDMC\u003C/strong\u003E\u003C/a\u003E\u003Cstrong\u003E Services in Thailand by Explera DMC\u003C/strong\u003E\u003Cbr\u003E\u003Cstrong\u003E1. Group Travel &amp; FIT Services\u003C/strong\u003E\u003Cbr\u003EExplera DMC crafts unique travel itineraries catering to groups of all sizes and individual travelers. From cultural tours in Ayutthaya to adventure activities in Chiang Rai, we provide comprehensive solutions tailored to traveler needs.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003E2. MICE (Meetings, Incentives, Conferences, and Exhibitions)\u003C/strong\u003E\u003Cbr\u003EThailand is a hotspot for business events and corporate retreats. Our dedicated MICE team ensures flawless event execution, including venue selection, logistics management, and creative event planning.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003E3. \u003C/strong\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003E\u003Cstrong\u003ELuxury Travel\u003C/strong\u003E\u003C/a\u003E\u003Cstrong\u003E &amp; VIP Experiences\u003C/strong\u003E\u003Cbr\u003EFor high-end travelers, we provide private yacht charters, helicopter transfers, five-star accommodations, and exclusive experiences at Thailand’s most luxurious resorts and destinations.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003E4. Adventure &amp; Eco-Tourism\u003C/strong\u003E\u003Cbr\u003EThailand offers world-class adventure opportunities, from diving in Koh Tao to jungle trekking in Khao Sok National Park. Our sustainable tourism approach promotes eco-friendly travel experiences.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003E5. Wedding &amp; Honeymoon Planning\u003C/strong\u003E\u003Cbr\u003EThailand is a dream wedding and honeymoon destination. Explera DMC organizes destination weddings, beach ceremonies, and honeymoon getaways in picturesque locations like Koh Samui and Krabi.\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EPartner with \u003C/strong\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003E\u003Cstrong\u003EExplera DMC\u003C/strong\u003E\u003C/a\u003E\u003Cstrong\u003E for the Best Thailand Travel Experience\u003C/strong\u003E\u003Cbr\u003EIf you're looking for a reliable, innovative, and customer-centric Thailand DMC, Explera DMC – Explera Vacations Co. Ltd. is your perfect partner. Whether you are a travel agency, corporate client, or an independent traveler, we ensure a seamless, unforgettable journey in Thailand.\u003C/p\u003E\u003Cblockquote\u003E\u003Cp\u003E???? Contact Us Today to plan your next Thailand adventure with Explera DMC!\u003C/p\u003E\u003C/blockquote\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003E???? Contact Details:\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"wa.me/+66930711160\"\u003E+66 930711160\u003C/a\u003E - give phone call link\u003C/p\u003E\u003Cp\u003E- - - - - - - - - - - - - - - - - - - - - - - - - - - - -\u003C/p\u003E\u003Cp\u003EReach Us\u003Cbr\u003E\u003Cstrong\u003E???? General Inquiries:\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"mailto:b2b@expleradmc.com\"\u003Eb2b@expleradmc.com\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E* - - - - - - - - - - - - - - - - - - - - - - - - - - - -\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003E???? MICE &amp; Corporate Events:\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"mailto:mice@expleradmc.com\"\u003Emice@expleradmc.com\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003E???? Weddings &amp; Yacht Rentals:\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"mailto:elite@expleradmc.com\"\u003Eelite@expleradmc.com\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003E???? Hotel Contracting Only:\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"mailto:contracting@explera.co.th\"\u003Econtracting@explera.co.th\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003E1. Offer Validity\u003C/strong\u003E\u003Cbr\u003EAll special offers and discounts are valid for a limited period as specified in the promotion.\u003Cbr\u003EOffers apply only to new bookings and cannot be applied to previously confirmed reservations.\u003Cbr\u003E\u003Cstrong\u003E2. Booking &amp; Payment Conditions\u003C/strong\u003E\u003Cbr\u003ETo avail of an offer, a minimum booking value may be required (subject to package details).\u003Cbr\u003EA deposit or full payment may be required at the time of booking to secure the offer.\u003Cbr\u003EPayments must be made via approved methods (bank transfer, credit card, or online payment gateway).\u003Cbr\u003E\u003Cstrong\u003E3. Eligibility &amp; Restrictions\u003C/strong\u003E\u003Cbr\u003EOffers are non-transferable and cannot be exchanged for cash or combined with other promotions unless stated.\u003Cbr\u003EDiscounts apply only to specified travel packages, hotels, or services and may exclude peak season dates, holidays, and blackout periods.\u003Cbr\u003ESome offers may be applicable only to group bookings, MICE events, or specific categories of travelers (e.g., honeymooners, corporate clients).\u003Cbr\u003E\u003Cstrong\u003E4. Cancellation &amp; Modifications\u003C/strong\u003E\u003Cbr\u003EStandard cancellation policies apply unless otherwise stated in the offer.\u003Cbr\u003EAny modification to an offer booking is subject to availability and additional charges if applicable.\u003Cbr\u003EIf an offer is canceled, refunds (if any) will be processed as per the cancellation policy.\u003Cbr\u003E\u003Cstrong\u003E5. Special Conditions for MICE &amp; \u003C/strong\u003E\u003Ca href=\"https://www.explera.co.th\"\u003E\u003Cstrong\u003EGroup Travel\u003C/strong\u003E\u003C/a\u003E\u003Cbr\u003EMICE (Meetings, Incentives, Conferences, and Exhibitions) and group travel promotions may have specific deposit and payment deadlines.\u003Cbr\u003EMinimum group size requirements must be met to qualify for discounted rates.\u003Cbr\u003E\u003Cstrong\u003E6. Explera DMC Rights &amp; Changes\u003C/strong\u003E\u003Cbr\u003EExplera DMC reserves the right to modify or withdraw any offer at its discretion without prior notice.\u003Cbr\u003EIn case of unforeseen circumstances (e.g., natural disasters, political instability, or health emergencies), Explera DMC may offer alternative arrangements.\u003Cbr\u003E\u003Cstrong\u003E7. Travel Insurance &amp; Liability\u003C/strong\u003E\u003Cbr\u003ETravel insurance is highly recommended but not included in most offers unless specified.\u003Cbr\u003EExplera DMC is not responsible for any personal loss, injury, or travel disruptions due to factors beyond our control.\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003E???? For further details or to confirm eligibility for an offer, please contact \u003C/strong\u003E\u003Ca href=\"https://www.explera.co.th\"\u003E\u003Cstrong\u003EExplera DMC\u003C/strong\u003E\u003C/a\u003E\u003Cstrong\u003E directly.\u003C/strong\u003E\u003C/p\u003E",
        "start_date": "2025-03-06",
        "end_date": "2025-08-21",
        "discount_type": "percent",
        "discount_percent": "20",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "824",
        "alt_text": "Seamless travel solutions with inclusive services for all accessibility needs.",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-03-06 08:57:33",
        "thumbnail_file": {
          "id": "36069",
          "title": "3fd1c2acf46d9aceaa50adf7025790ce.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/36069/3fd1c2acf46d9aceaa50adf7025790ce.jpeg",
          "file_type": "image/jpeg",
          "file_size": "117348",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2025-03-05 20:34:04",
        "datetime_updated": "2025-03-06 08:57:33"
      },
      {
        "id": "100",
        "has_promotion_code": "0",
        "name": "Best Thailand DMC: Discover Seamless Travel with Explera DMC",
        "slug": "best-thailand-dmc-discover-seamless-travel-with-explera-dmc",
        "description": "\u003Cp\u003E\u003Cstrong\u003E✨ Experience Thailand Like Never Before with \u003C/strong\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003E\u003Cstrong\u003EExplera DMC\u003C/strong\u003E\u003C/a\u003E\u003Cstrong\u003E ✨\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EWhen it comes to exploring Thailand's breathtaking landscapes, vibrant cities, and rich cultural heritage, partnering with the best \u003Ca href=\"https://www.expleradmc.com\"\u003EThailand DMC\u003C/a\u003E (\u003Ca href=\"https://www.expleradmc.com\"\u003EDestination Management Company\u003C/a\u003E) can make all the difference. \u003Ca href=\"https://www.expleradmc.com\"\u003EExplera DMC\u003C/a\u003E stands as a trusted name in the industry, offering top-notch travel services tailored to your every need.\u003C/p\u003E\u003Cp\u003EWhether you're planning a luxury holiday, a corporate event, or an incentive trip, we bring your vision to life with unparalleled expertise and meticulous attention to detail.\u003Cbr\u003E\u003Cbr\u003E- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EWhy Choose Explera DMC?\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003E✅ Comprehensive Travel Solutions: From airport transfers to hotel bookings, curated excursions, and visa assistance, we cover every aspect of your travel.\u003C/p\u003E\u003Cp\u003E✅ Local Expertise: Our on-ground teams in Thailand possess deep knowledge of the region, ensuring you have authentic and seamless experiences.\u003C/p\u003E\u003Cp\u003E✅ Tailored Itineraries: Whether you're an adventure seeker, a couple on a romantic getaway, or a corporate group, we create personalized travel plans.\u003C/p\u003E\u003Cp\u003E✅ Trusted Partnerships: We work with the best hotels, transport services, and tour operators across Thailand to deliver world-class services.\u003C/p\u003E\u003Cp\u003E✅ 24/7 Support: Travel worry-free with our round-the-clock assistance.\u003Cbr\u003E- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ETop Destinations We Cover in \u003C/strong\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003E\u003Cstrong\u003EThailand\u003C/strong\u003E\u003C/a\u003E\u003Cbr\u003E????️ Phuket: Enjoy the stunning beaches and vibrant nightlife.\u003Cbr\u003E????️ Bangkok: Explore the dynamic capital city filled with cultural gems and luxury experiences.\u003Cbr\u003E???? Chiang Mai: Discover Thailand's tranquil side with lush greenery and historic temples.\u003Cbr\u003E????️ Krabi: Experience paradise with pristine beaches and mesmerizing landscapes.\u003C/p\u003E\u003Cp\u003E- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EOur Signature Services\u003C/strong\u003E\u003Cbr\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003ELuxury and Group Tours\u003C/a\u003E: Custom experiences designed for all group sizes and preferences.\u003Cbr\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003EMICE\u003C/a\u003E (Meetings, Incentives, Conferences, and Exhibitions): End-to-end corporate travel solutions.\u003Cbr\u003EIncentive Travel: Reward your team with memorable experiences in Thailand.\u003Cbr\u003ECultural and Adventure Tours: Dive deep into Thailand's culture and thrilling activities.\u003Cbr\u003EWedding and Event Planning: Make your special day unforgettable with our expert event planners.\u003C/p\u003E\u003Cp\u003E- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EWhy \u003C/strong\u003E\u003Ca href=\"https://www.expleradmc.com\"\u003E\u003Cstrong\u003EThailand\u003C/strong\u003E\u003C/a\u003E\u003Cstrong\u003E Is the Ultimate Travel Destination\u003C/strong\u003E\u003Cbr\u003EThailand offers a perfect blend of natural beauty, cultural richness, and modern amenities. Its friendly locals, delicious cuisine, and world-class hospitality make it a favorite destination for travelers from around the globe.\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EReady to Plan Your Thailand Adventure?\u003C/strong\u003E\u003Cbr\u003E???? Contact \u003Ca href=\"https://www.expleradmc.com\"\u003EExplera DMC\u003C/a\u003E Today\u003Cbr\u003EPhone: +66 621652299\u003Cbr\u003EEmail: \u003Ca href=\"mailto:b2b@expleradmc.com\"\u003Eb2b@expleradmc.com\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ELet us transform your Thailand travel dreams into reality with our exceptional services.\u003C/p\u003E\u003Cp\u003E#ExpleraDMC #\u003Ca href=\"https://www.expleradmc.com\"\u003EBestThailandDMC\u003C/a\u003E #\u003Ca href=\"https://www.expleradmc.com\"\u003ELuxuryTravelThailand\u003C/a\u003E #\u003Ca href=\"https://www.expleradmc.com\"\u003ETravelExperts\u003C/a\u003E #\u003Ca href=\"https://www.expleradmc.com\"\u003EThailandTours\u003C/a\u003E #\u003Ca href=\"https://www.expleradmc.com\"\u003EExploreThailand\u003C/a\u003E #\u003Ca href=\"https://www.expleradmc.com\"\u003EMICEThailand\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003ESpecial Offer:\u003C/p\u003E\u003Cp\u003E10% Discount on all travel packages in Thailand for Chinese citizens.\u003Cbr\u003EOffer valid for bookings until 31st December 2024.\u003Cbr\u003ETravel dates must align with the Chinese New Year period.\u003Cbr\u003ETerms &amp; Conditions:\u003C/p\u003E\u003Cp\u003EThe offer is available exclusively for Chinese citizens.\u003Cbr\u003EBookings must be confirmed before 31st December 2024.\u003Cbr\u003EDiscounts apply to package prices only (excluding taxes and additional services).\u003Cbr\u003ETravel dates must be between Chinese New Year travel period (exact dates to be confirmed based on the official Chinese New Year holiday).\u003Cbr\u003EOffer is non-refundable and cannot be combined with other promotions.\u003Cbr\u003EExplera DMC reserves the right to modify or terminate the promotion without prior notice.\u003C/p\u003E",
        "start_date": "2025-02-01",
        "end_date": "2028-02-29",
        "discount_type": "percent",
        "discount_percent": "10",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "650",
        "alt_text": "Vehicles equipped with wheelchair access and ample space for a comfortable journey.",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-02-13 09:57:08",
        "thumbnail_file": {
          "id": "35674",
          "title": "f7741386b1f416cc2de53d590335d890.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/35674/f7741386b1f416cc2de53d590335d890.jpeg",
          "file_type": "image/jpeg",
          "file_size": "30871",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2025-02-11 18:14:30",
        "datetime_updated": "2025-02-13 09:57:08"
      },
      {
        "id": "99",
        "has_promotion_code": "0",
        "name": "Health Check Up in Chiang Mai",
        "slug": "health-check-up-in-chiang-mai",
        "description": "\u003Cp\u003EEssential Check-Up – Special Offer in Chiang Mai!\u003Cbr\u003ELimited-Time Price: 6,900 THB (Normal Price: 10,000 THB)\u003C/p\u003E\u003Cp\u003EStay proactive about your health with the Essential Check-Up, a comprehensive screening package designed for early detection and prevention of potential health issues. Whether for routine monitoring or preventive care, this package provides a complete assessment at an unbeatable value.\u003C/p\u003E\u003Cp\u003EWhat’s Included?\u003Cbr\u003E✅ Physical Examination – Conducted by an experienced medical physician\u003Cbr\u003E✅ Body Mass Index (BMI) – Assessment of body composition\u003Cbr\u003E✅ Blood Tests:\u003C/p\u003E\u003Cp\u003EComplete Blood Count (CBC)\u003Cbr\u003EFasting Blood Sugar\u003Cbr\u003EHBA1C (Long-term blood sugar control)\u003Cbr\u003ELipid Profile:\u003Cbr\u003ETotal Cholesterol\u003Cbr\u003EHDL Cholesterol\u003Cbr\u003ELDL Cholesterol\u003Cbr\u003ETriglycerides\u003Cbr\u003EUric Acid (Gout Risk Assessment)\u003Cbr\u003EKidney Function: Creatinine Plus GFR\u003Cbr\u003ELiver Function: SGPT\u003Cbr\u003EHepatitis Screening: HBsAg, HBsAb\u003Cbr\u003E\u003Cbr\u003E✅ Urine Examination\u003Cbr\u003E✅ Chest X-ray – Screening for lung and heart health\u003Cbr\u003E✅ Electrocardiogram (EKG) – Heart health evaluation\u003Cbr\u003E✅ Vitamin D (25-Hydroxy Vitamin D Total) – Bone health assessment\u003Cbr\u003E\u003Cbr\u003E⏳ Service Duration: Approximately 2-3 Hours\u003Cbr\u003ELocation: Leading Medical Facility in Chiang Mai\u003C/p\u003E\u003Cp\u003EDon’t miss out on this exclusive opportunity to take charge of your health at a discounted price!\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://bangkokhealthservice.com/health-check-up-in-thailand/chiang-mai/\"\u003EClick here to Book Now &amp; Save on our website!\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003ELimited Offer: Available for a short time, subject to change.Booking &amp; Payment: Book on our website. Payment after health check is completed.Inclusions: Covers only listed tests; additional services charged separately.Rescheduling and cancellation: Allowed once with 3 days notice.Preparation: 8-hour fasting required; avoid alcohol/caffeine 24 hours prior.Location: Please note the address for the health check is not our company address, but will be provided after booking.\u003C/p\u003E",
        "start_date": "2025-01-01",
        "end_date": "2025-12-31",
        "discount_type": "price",
        "discount_percent": null,
        "original_price": "10000",
        "discount_price": "6900",
        "special_offer": null,
        "view": "960",
        "alt_text": "",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40891",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "50362",
        "approver_id": "1124",
        "owner_id": "50362",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-02-06 10:05:58",
        "thumbnail_file": {
          "id": "35506",
          "title": "83676b9805900401a014960ca90483f6.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/35506/83676b9805900401a014960ca90483f6.jpeg",
          "file_type": "image/jpeg",
          "file_size": "91159",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Bangkok Health Service Co., Ltd.",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2025-02-04 17:23:02",
        "datetime_updated": "2025-02-06 10:05:58"
      },
      {
        "id": "98",
        "has_promotion_code": "0",
        "name": "Health Check Up in Bangkok",
        "slug": "health-check-up-in-bangkok",
        "description": "\u003Cp\u003EEssence Check-Up Promotion – Limited Time Offer!\u003Cbr\u003ESpecial Price: 5,400 THB (Normal Price: 11,980 THB)\u003C/p\u003E\u003Cp\u003ETake charge of your health with the Essence Check-Up, a comprehensive and efficient health screening package designed for individuals seeking an effective personal health check. This package provides a solid foundation for understanding your health status, ensuring early detection of potential risks.\u003C/p\u003E\u003Cp\u003EWhat’s Included?\u003Cbr\u003E✅ Basic Measurements: Vital signs &amp; Body Mass Index (BMI)\u003Cbr\u003E✅ Physical Examination: Conducted by a medical physician\u003Cbr\u003E✅ Blood Tests:\u003C/p\u003E\u003Cp\u003EComplete Blood Count (CBC)\u003Cbr\u003EFasting Blood Sugar\u003Cbr\u003ECholesterol Profile (Total Cholesterol, HDL, LDL, Triglycerides)\u003Cbr\u003E✅ Kidney Function Test: BUN &amp; Creatinine\u003Cbr\u003E✅ Liver Function Test: SGPT, SGOT\u003Cbr\u003E✅ Thyroid Function Test: TSH\u003Cbr\u003E✅ Urine Analysis\u003Cbr\u003E✅ Chest X-Ray\u003Cbr\u003E✅ Electrocardiogram (EKG)\u003Cbr\u003E⏳ Service Duration: 1-2 Hours\u003Cbr\u003ELocation: Bangkok\u003C/p\u003E\u003Cp\u003ETake advantage of this limited-time offer and prioritize your well-being today!\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://bangkokhealthservice.com/health-check-up-in-thailand/bangkok/\"\u003EClick here to Book Now &amp; Save on our website!\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003ELimited Offer: Available for a short time, subject to change.\u003Cbr\u003EBooking &amp; Payment: Book on our website. Payment after health check is completed.\u003Cbr\u003EInclusions: Covers only listed tests; additional services charged separately.\u003Cbr\u003ERescheduling and cancellation: Allowed once with 3 days notice.\u003Cbr\u003EPreparation: 8-hour fasting required; avoid alcohol/caffeine 24 hours prior.\u003Cbr\u003ELocation: Please note the address for the health check is not our company address, but will be provided after booking.&nbsp;\u003C/p\u003E",
        "start_date": "2025-01-01",
        "end_date": "2025-12-31",
        "discount_type": "price",
        "discount_percent": null,
        "original_price": "11980",
        "discount_price": "5400",
        "special_offer": null,
        "view": "864",
        "alt_text": "Get discount on your health check up!",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40891",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "50362",
        "approver_id": "1124",
        "owner_id": "50362",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-01-31 13:55:41",
        "thumbnail_file": {
          "id": "35331",
          "title": "0e9262c6d18222784ce891d96e6cdea8.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/35331/0e9262c6d18222784ce891d96e6cdea8.jpeg",
          "file_type": "image/jpeg",
          "file_size": "101573",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Bangkok Health Service Co., Ltd.",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2025-01-29 09:50:10",
        "datetime_updated": "2025-01-31 13:55:41"
      },
      {
        "id": "95",
        "has_promotion_code": "0",
        "name": "Bangkok Health Check Up Basic 2 Nights Package",
        "slug": "bangkok-health-check-up-basic-2-nights-package",
        "description": "\u003Cp\u003ETwo nights in Bangkok including basic health check in top hospital, hotel and airport transport.Enjoy two nights in Bangkok including basic health check up, hotel and airport hospital transfer. Let us take care of all planning of you annual health check.&nbsp;Personalized Planning: Leave the planning to us! We’ll manage your entire stay, from your appointment scheduling to making sure you have everything you need during your time in Bangkok.\u003C/p\u003E\u003Cp\u003ETo book please send us a mail on info@bangkokhealthservice.com / promotion code: CheckUpBasic\u003C/p\u003E\u003Cp\u003ESee more details on: https://bangkokhealthservice.com/medical-package/bangkok-health-check-up-basic-2-nights-3-star-package/\u003C/p\u003E\u003Cp\u003EHealth Check Up Basic Includes:\u003C/p\u003E\u003Cp\u003EBody Mass Index (BMI)&nbsp;\u003Cbr\u003EPhysical examination by medical physician&nbsp;\u003Cbr\u003EComplete Blood Count (CBC)&nbsp;\u003Cbr\u003ESugar profile&nbsp;\u003Cbr\u003ELipid profile&nbsp;\u003Cbr\u003EKidney Function&nbsp;\u003Cbr\u003EUric acid&nbsp;\u003Cbr\u003ELiver Function Test&nbsp;\u003Cbr\u003EUrinalysis&nbsp;\u003Cbr\u003EChest X-ray&nbsp;\u003Cbr\u003ECheck-up report Book&nbsp;\u003Cbr\u003EDoctor review and talk\u003C/p\u003E",
        "condition": "\u003Cp\u003ETwo nights in Bangkok including basic health check in top hospital, hotel and airport transport.\u003Cbr\u003E\u003Cbr\u003EEnjoy two nights in Bangkok including basic health check up, hotel and airport hospital transfer. Let us take care of all planning of you annual health check.&nbsp;\u003Cbr\u003E\u003Cbr\u003EPersonalized Planning: Leave the planning to us! We’ll manage your entire stay, from your appointment scheduling to making sure you have everything you need during your time in Bangkok.\u003Cbr\u003E&nbsp;\u003C/p\u003E\u003Cp\u003ETo book please send us a mail on info@bangkokhealthservice.com / promotion code: CheckUpBasic\u003C/p\u003E\u003Cp\u003ESee more details on: https://bangkokhealthservice.com/medical-package/bangkok-health-check-up-basic-2-nights-3-star-package/\u003C/p\u003E\u003Cp\u003EHealth Check Up Basic Includes:&nbsp;\u003Cbr\u003EBody Mass Index (BMI)&nbsp;\u003Cbr\u003EPhysical examination by medical physician&nbsp;\u003Cbr\u003EComplete Blood Count (CBC)&nbsp;\u003Cbr\u003ESugar profile&nbsp;\u003Cbr\u003ELipid profile&nbsp;\u003Cbr\u003EKidney Function&nbsp;\u003Cbr\u003EUric acid&nbsp;\u003Cbr\u003ELiver Function Test&nbsp;\u003Cbr\u003EUrinalysis&nbsp;\u003Cbr\u003EChest X-ray&nbsp;\u003Cbr\u003ECheck-up report Book&nbsp;\u003Cbr\u003EDoctor review and talk\u003C/p\u003E",
        "start_date": "2025-01-01",
        "end_date": "2025-12-31",
        "discount_type": "percent",
        "discount_percent": "10",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "1465",
        "alt_text": "",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40891",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "50362",
        "approver_id": "1124",
        "owner_id": "50362",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2025-01-30 09:02:50",
        "thumbnail_file": {
          "id": "33653",
          "title": "055d5f99be306ef611e730139dadd9e2.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/33653/055d5f99be306ef611e730139dadd9e2.jpeg",
          "file_type": "image/jpeg",
          "file_size": "57577",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Bangkok Health Service Co., Ltd.",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2024-12-11 12:34:59",
        "datetime_updated": "2025-01-30 09:02:50"
      },
      {
        "id": "92",
        "has_promotion_code": "1",
        "name": "???? Exclusive Worldwide Ready-Made Package Offer! Flat 7% Off ????",
        "slug": "exclusive-worldwide-ready-made-package-offer-flat-7-off",
        "description": "\u003Cp\u003EPlanning your next adventure? Get a flat 7% discount on all our ready-made travel packages! Available for worldwide travelers, this limited-time offer is designed to make your trip planning effortless and affordable. Choose from our wide range of packages and enjoy an unforgettable experience with Explera!\u003Cbr\u003E\u003Cbr\u003EDiscover the world with exclusive savings on Explera’s ready-made packages. Whether you’re seeking adventure, relaxation, or cultural immersion, our packages cater to all kinds of travelers. Book now to secure your flat 7% discount and experience the ease and expertise of traveling with Explera!\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EPackage Availability\u003C/strong\u003E\u003Cbr\u003EExplore our packages via the following links:\u003Cbr\u003EGoogle Drive: \u003Ca href=\"https://drive.google.com/drive/folders/1Uto4ePJT_1W--QHH346-jA-lAGhm2WaT?usp=drive_link\"\u003EClick here\u003C/a\u003E\u003Cbr\u003EWebsite: \u003Ca href=\"https://www.explera.co.th\"\u003Ehttps://www.explera.co.th\u003C/a\u003E\u003Cbr\u003EActivity Booking: \u003Ca href=\"https://explera.co.th/shop\"\u003EClick here&nbsp;\u003C/a\u003E\u003Cbr\u003E\u003Cstrong\u003EContact Us: ????\u003C/strong\u003E \u003Ca href=\"mailto:enquiry@explera.co.th\"\u003Eenquiry@explera.co.th\u003C/a\u003E | ☎️ +66 930711160 &nbsp;| ☎️ +66 621652299\u003C/p\u003E",
        "condition": "\u003Cul\u003E\u003Cli\u003E\u003Cstrong\u003ETerms and Conditions for 7% Flat Discount on Ready-Made Packages\u003C/strong\u003E\u003Cbr\u003E&nbsp;\u003C/li\u003E\u003Cli\u003EPromo Code Requirement: To avail of the 7% discount, customers must email us with the subject line “Promo Code: \u003Cstrong\u003EEXPLORE7OFF\u003C/strong\u003E” and include the promo code in their booking request.\u003C/li\u003E\u003Cli\u003EValidity Period: Booking Period: This offer is valid for bookings made until 31st August 2025. Travel Period: Bookings must be made at least one month before the intended travel date.\u003C/li\u003E\u003Cli\u003EEligible Packages: The discount applies exclusively to selected ready-made packages listed on our Google Drive, website, and activity booking sections. Custom or personalized packages are not eligible for this discount.\u003C/li\u003E\u003Cli\u003EDiscount Application: The 7% discount will be applied only to the total package amount and is not valid on any add-ons or upgrades.\u003C/li\u003E\u003Cli\u003ENon-Transferable: This promo code is non-transferable and cannot be combined with any other promotions, discounts, or offers.\u003C/li\u003E\u003Cli\u003EFull Payment Requirement: To qualify for the discount, the full payment must be completed at the time of booking.\u003C/li\u003E\u003Cli\u003ECancellation and Refund Policy: In the event of cancellation, standard cancellation policies apply. Please review each package for specific cancellation details. Refunds will be processed based on the total amount paid after deducting applicable cancellation fees, but the discount amount will not be refunded.\u003C/li\u003E\u003Cli\u003EContact for Assistance: For any questions or assistance, please reach out via email at ???? \u003Cstrong\u003Eenquiry@explera.co.th\u003C/strong\u003E | ☎️ \u003Cstrong\u003E+66 930711160\u003C/strong\u003E &nbsp;| ☎️\u003Cstrong\u003E +66 621652299\u003C/strong\u003E\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E",
        "start_date": "2024-10-26",
        "end_date": "2025-08-31",
        "discount_type": "percent",
        "discount_percent": "7",
        "original_price": null,
        "discount_price": null,
        "special_offer": null,
        "view": "1936",
        "alt_text": "We are committed to providing an inclusive travel experience for all our customers. Our packages and services are designed with accessibility in mind to accommodate travelers with diverse needs, ensuring everyone can enjoy a comfortable and memorable journey. From accessible transportation to accommodations with special amenities, our team is here to support you at every step.",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40888",
        "campaign_id": "0",
        "has_total_limit": "1",
        "total_limit": "200",
        "used": "0",
        "updater_id": "48869",
        "approver_id": "1124",
        "owner_id": "48869",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2024-10-31 15:26:21",
        "thumbnail_file": {
          "id": "33184",
          "title": "6c8d8e0466315011dc696e25e322f8a1.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/33184/6c8d8e0466315011dc696e25e322f8a1.jpeg",
          "file_type": "image/jpeg",
          "file_size": "153471",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Explera DMC (EXPLERA VACATIONS CO LTD)",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2024-10-26 13:04:38",
        "datetime_updated": "2024-10-31 15:26:21"
      },
      {
        "id": "86",
        "has_promotion_code": "0",
        "name": "4-Days & 3-Nights Magic South Adventure Tour",
        "slug": "4-days-3-nights-magic-south-adventure-tour",
        "description": "\u003Cblockquote\u003E\u003Cp\u003E\u003Cstrong\u003EExperience the hidden wonders of Southern Thailand with the Magic South Adventure Tour\u003C/strong\u003E\u003C/p\u003E\u003C/blockquote\u003E\u003Cp\u003EA meticulously crafted 4-day, 3-night journey that combines adventure, culture, and breathtaking natural beauty by Magic Travel. Discover the best of Surat Thani, Khao Sok, Nakhon Si Thammarat, and Phatthalung with personalized service and an unforgettable itinerary.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EItinerary Overview: &nbsp;\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003E\u003Ci\u003E\u003Cstrong\u003EDay 1: Arrival and Fire-flies Night Longtail Boat Cruise through Surat Thani\u003C/strong\u003E\u003C/i\u003E\u003C/p\u003E\u003Cp\u003EAssemble at the hotel in Surat Thani by 18:00.Embark on a magical Longtail boat night cruise along the Ta Pee River, crossing the lightfull city of Surat Thani and witnessing a spectacular display of fireflies. Location Covered: Surat Thani &nbsp;\u003C/p\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EDay 2: Emerald Lake Pipes Swim, Khao Sok, and the Enchanted Temple Garden\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EEnjoy a hearty breakfast followed by a swim in the clear waters of the Emerald Lake.Float down the river in rubber tubes amidst the ancient rainforest of Khao Sok.Savor a local lunch at the stunning Ratchaprapha Dam.Visit the mystical Enchanted Temple Garden before arriving at your hotel in Nakhon Si Thammarat. Locations Covered: Surat Thani &nbsp;&amp; Khao Sok\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EDay 3: Mangrove Tour, Mineral Mud Bathing, Village Cooking Class and Jungle Skywalk\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EBegin with a sunrise Longtail boat tour through the mangroves, with a light breakfast on a floating raft.Experience a mineral mud bath with unique healing properties.Participate in a cooking class using fresh, locally sourced ingredients in a traditional Fisherman’s Village.Explore the Botanic Garden Sky Tower and enjoy a sunset dinner in Phatthalung. Locations Covered: Nakhon Si Thammarat &amp; Phatthalung\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EDay 4: Talay Noi Lake, Tea Plantation, and Adventure Activities; Cave &amp; Rafting\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003ECruise among the lilies and lotuses of Talay Noi Lake, observing wild buffalo and diverse birdlife.Have breakfast at a green tea plantation with breathtaking views.Explore the White Elephant Temple and the mesmerizing \"Avatar Cave.\"Conclude the tour with an exciting white-water rafting adventure before returning to Surat Thani Airport. Locations Covered: Phatthalung &amp; Nakhon Si Thammarat&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://www.magic-south.com/product-page/4d3n-thailand-s-magic-south-adventure-magic-travel\"\u003EFor more information or to book the Magic South Adventure Tour please click this link to visit our booking page\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Ci\u003E\u003Cstrong\u003EThe Tour Includes:\u003C/strong\u003E\u003C/i\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EPrivate Van (up to 8 or 10 people)\u003C/li\u003E\u003Cli\u003EFull Board - hotels, 8 meals, drinking water\u003C/li\u003E\u003Cli\u003EThai and English Speaking Guide\u003C/li\u003E\u003Cli\u003EEntrance and Admission to all locations\u003C/li\u003E\u003Cli\u003EProtection equipment\u003C/li\u003E\u003Cli\u003EInsurance\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Ci\u003E\u003Cstrong\u003EWhat should I bring with me?\u003C/strong\u003E\u003C/i\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003ETowel\u003C/li\u003E\u003Cli\u003EWalking Shoes\u003C/li\u003E\u003Cli\u003EBathing Suit\u003C/li\u003E\u003Cli\u003ESunscreen\u003C/li\u003E\u003Cli\u003EHat\u003C/li\u003E\u003Cli\u003EMosquito Spray\u003C/li\u003E\u003Cli\u003EFlip Flops\u003C/li\u003E\u003Cli\u003EGood Mood\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Ci\u003E\u003Cstrong\u003E\u003Cu\u003EOur Cancellation Policy:\u003C/u\u003E\u003C/strong\u003E\u003C/i\u003E\u003Cbr\u003E- 10% will be charged if the Magic South Adventure Tour canceled after booking\u003Cbr\u003E- 50% will be charged if canceled up to 72 hours before the &nbsp;Magic South Adventure Tour &nbsp;starts\u003Cbr\u003E- No refund if you cancel 48 hours before the Magic South Adventure Tour starts&nbsp;\u003C/p\u003E",
        "start_date": "2024-06-10",
        "end_date": "2025-07-10",
        "discount_type": "price",
        "discount_percent": null,
        "original_price": "14000",
        "discount_price": "12000",
        "special_offer": null,
        "view": "7145",
        "alt_text": "At Magic South Adventure Tour, we are committed to ensuring that our tour is accessible to everyone. Our itineraries are designed to accommodate travelers with diverse needs, including Accessible Transportation: We provide options for accessible transportation to and from all major attractions. Accommodation: Our partner hotels and lodgings offer accessible rooms and facilities. Guided Assistance: Our trained guides are equipped to assist travelers with mobility challenges and other special requirements. Customizable Itineraries: We offer personalized itinerary adjustments to meet individual accessibility needs, ensuring a comfortable and enjoyable experience for all. Please inform us of any specific requirements when booking, so we can ensure a seamless and accommodating adventure in Southern Thailand.",
        "rating": "5",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40817",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "49736",
        "approver_id": "1124",
        "owner_id": "49736",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2024-06-11 09:18:41",
        "thumbnail_file": {
          "id": "30946",
          "title": "4563f83aefaee1f2c8d49039fa4bcf48.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/30946/4563f83aefaee1f2c8d49039fa4bcf48.jpeg",
          "file_type": "image/jpeg",
          "file_size": "271287",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "Magic Travel by Shift Live Plus Company Limited",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2024-06-10 19:55:07",
        "datetime_updated": "2024-06-11 09:18:41"
      },
      {
        "id": "79",
        "has_promotion_code": "0",
        "name": "\"Vacay\" Book with us you’re guaranteed an extraordinary experience.",
        "slug": "vacay-book-with-us-you-re-guaranteed-an-extraordinary-experience",
        "description": "\u003Cp\u003E\u003Cstrong\u003EVacay\u003C/strong\u003E, where your vacation begins! Kick off your memorable journey to Thailand with us, our team is ready to serve you.&nbsp;\u003C/p\u003E\u003Cp\u003EWhich hue captures your heart more the verdant green mountains of Northern Thailand or the profound azure of the Andaman Sea? Enlist us as your travel expert, we'll transform this exceptional voyage into a reality.&nbsp;\u003C/p\u003E\u003Cp\u003EConsider us as your primary option when contemplating both domestic and international travel. We offer a wide array of services to cater to your needs. Our expertise lies in crafting personalized journeys for your ideal vacation experience!&nbsp;\u003C/p\u003E\u003Cp\u003EWhether you seek a thrilling adventure, a cultural immersion, a relaxing getaway, shopping we curate experiences that cater to your specific interests contact us now.\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"www.facebook.com/vacay.co.th\"\u003E\u003Cstrong\u003EFollow Me\u003C/strong\u003E\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com &nbsp; &nbsp; &nbsp;\u003Cbr\u003EMobile: +66 (0) 91 720 5665 &nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EAddress &nbsp;&nbsp;\u003C/strong\u003E &nbsp; &nbsp;\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand. &nbsp; &nbsp; Email: rsvn-htl@vacaybeds.com\u003Cbr\u003ETel: +66 (0) 2 115 9495\u003Cbr\u003EPhone/WhatsApp: +66 (0) 86 342 9526 &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003EWebsite: \u003Ca href=\"www.vacaybeds.com\"\u003Ewww.vacaybeds.com&nbsp;\u003C/a\u003E &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003ESocial: vacaythailland &nbsp; &nbsp; &nbsp;&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp; &nbsp; &nbsp;\u003C/strong\u003E &nbsp;\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours.\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"www.vacaybeds.com \"\u003E\u003Cstrong\u003EThailand Is Waiting For You To Discover For More Detail\u003C/strong\u003E\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2023-12-01",
        "end_date": "2029-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "BOOK WITH VACAY STAY BETTER",
        "view": "11393",
        "alt_text": "#Thailand  #vacay #vacaythailand",
        "rating": "5",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-12-29 10:28:04",
        "thumbnail_file": {
          "id": "27648",
          "title": "baa0326a0106a1c46b16a1edb83f3653.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/27648/baa0326a0106a1c46b16a1edb83f3653.jpeg",
          "file_type": "image/jpeg",
          "file_size": "114788",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-12-21 22:04:08",
        "datetime_updated": "2023-12-29 10:28:04"
      },
      {
        "id": "77",
        "has_promotion_code": "0",
        "name": "Delight in the Auspicious Thai Desserts, Where Tradition Meets Indulgence",
        "slug": "delight-in-the-auspicious-thai-desserts-where-tradition-meets-indulgence",
        "description": "\u003Cp\u003E\u003Cstrong\u003EAuspicious Thai Desserts\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EThere are many amazing desserts in Thailand, but today we are highlighting special sweets originally brought to Thailand in recipes from the Portuguese made by egg-yolk based. It’s part of Buddhist rituals as each type of desserts has different meaning. Let’s look at these beautiful and special desserts.&nbsp;\u003C/p\u003E\u003Cp\u003ETong Yip (Pinched Gold Egg Yolks)-Wealth and success.&nbsp;Tong Tot (Gold Egg Yolks Drops)-Wishing the recipients continuous wealth.&nbsp;Foy Tong (Gold Egg Yolks Thread)-Wishing for long lasting love.\u003C/p\u003E\u003Cp\u003ESweet secrets of Thailand await for you to discover, contact us now.\u003Cbr\u003E\u003Cbr\u003E\u003Ca href=\"https://www.facebook.com/vacay.co.th\"\u003E\u003Cstrong\u003EFollow Me\u003C/strong\u003E\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand &nbsp; &nbsp; &nbsp;\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com &nbsp; &nbsp; &nbsp;\u003Cbr\u003EMobile: +66 (0)91 720 5665 &nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EAddress &nbsp;&nbsp;\u003C/strong\u003E &nbsp; &nbsp;\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand. &nbsp; &nbsp;&nbsp;\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com &nbsp; &nbsp;&nbsp;\u003Cbr\u003ETel: +66 (0)2 115 9495 &nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0)86 342 9526 &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp; &nbsp; &nbsp; &nbsp;\u003Cbr\u003ESocial: vacaythailland &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EPLAN YOUR TRIP\u003C/strong\u003E &nbsp; &nbsp; &nbsp; &nbsp;\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours. &nbsp; &nbsp; &nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Ca href=\"https://www.vacaybeds.com/\"\u003E\u003Cstrong\u003EThailand Is Waiting For You To Discover For More Detail\u003C/strong\u003E\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2023-11-01",
        "end_date": "2028-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "Auspicious Thai Desserts",
        "view": "5791",
        "alt_text": "#Dessert #Thaidessert #Thailand#ทองหยิบ #ทองหยอด #ทองเอก #ฝอยทอง #Vacay #vacaythailand",
        "rating": "5",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-11-13 10:08:42",
        "thumbnail_file": {
          "id": "26480",
          "title": "6e577ecde3accaa170fca890ab3cde0a.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/26480/6e577ecde3accaa170fca890ab3cde0a.jpeg",
          "file_type": "image/jpeg",
          "file_size": "208928",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-11-03 13:19:56",
        "datetime_updated": "2023-11-13 10:08:42"
      },
      {
        "id": "78",
        "has_promotion_code": "0",
        "name": "4 Most Visited Tourist Attractions in near Chiang Mai moat",
        "slug": "4-most-visited-tourist-attractions-in-near-chiang-mai-moat",
        "description": "\u003Cp\u003ETakes place entirely within the old city just a stone’s throw from Chiang Mai Moat\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EThe Chiang Mai moat\u003C/strong\u003E is a small body of water that surrounds the old city which you can still see the remains of today. it’s recommended to make the short but relaxing trek to this part of the city. If you haven’t explored this area yet, check out the Tha Phae Gate which is the eastern wall.&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ETha Phae Gate\u003C/strong\u003E is ancient wall at moat landmarks in Chiang Mai. Located on the eastern side of the wall, it originally constructed as entrance points to the old walled city of Chiang Mai. If you go into the walled city from here, you’ll be able to explore the whole of the old city and it will also lead you to the start of the Sunday night bazaar as well as nearby temples and attractions that border the wall.&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ETha Phae Walking Street\u003C/strong\u003E (Sunday Night Market) A walking street opening every Sunday. It has a lot of interesting things to offer to both Thais and foreigners like hill tribe products, wood carvings and handicrafts items. It’s heading to the Ratchadamnoen Road and split along the four lines of the intersection to Wat Phrasing.&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EWat Phrasing \u003C/strong\u003Eis also known as the “Monastery of the Lion Buddha’ or the ‘Temple of the Lion Buddha’ when you walk inside the temple it will lead you up to the gold-laced patterns and stunning murals.&nbsp;\u003C/p\u003E\u003Cp\u003EPersonalized travel guide just for you, Contact us now!!&nbsp;\u003Cbr\u003EInbox&nbsp;\u003Cbr\u003EEmail: &nbsp;enquiry@vacaybeds.com&nbsp;\u003Cbr\u003Ehttps://www.vacaybeds.com/\u003Cbr\u003ECall us: +66 (0) 917205665 /+66 (0) 863429526&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"www.facebook.com/vacay.co.th\"\u003E\u003Cstrong\u003EFollow me\u003C/strong\u003E\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp; &nbsp;&nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com &nbsp; &nbsp;\u003Cbr\u003EMobile: +66 (0)91 720 5665\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EAddress &nbsp; &nbsp;&nbsp;\u003C/strong\u003E\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp; &nbsp; &nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand. &nbsp;&nbsp;\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com &nbsp; &nbsp;&nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0)86 342 9526 &nbsp; &nbsp;&nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp; &nbsp; &nbsp;\u003Cbr\u003ESocial: vacaythailland &nbsp; &nbsp;&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp; &nbsp;\u003C/strong\u003E &nbsp;\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours.\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"www.vacaybeds.com\"\u003E\u003Cstrong\u003EThailand Is Waiting For You To Discover For More Detail\u003C/strong\u003E\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2023-11-01",
        "end_date": "2028-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "Takes place entirely within the old city",
        "view": "9580",
        "alt_text": "#Chiangmai #Thapeagate #Thapaewalkingstreet #Chiangmaiwalkingstreet #WatPhraSing #Thailand  #vacay #vacaythailand #ถนนคนเดิน #ถนนคนเดินเชียงใหม่ #ถนนคนเดินท่าแพ #ประตูท่าแพ #วัดพระสิงห์ #เชียงใหม่ #ประเทศไทย",
        "rating": "5",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40461",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-11-13 10:06:35",
        "thumbnail_file": {
          "id": "26610",
          "title": "75b877b919e81cfff02dadc8e3dc918b.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/26610/75b877b919e81cfff02dadc8e3dc918b.jpeg",
          "file_type": "image/jpeg",
          "file_size": "256112",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Transportation",
        "place_name": "Vacay Transportation",
        "type": "transportation",
        "lang": "en",
        "datetime_created": "2023-11-09 12:00:07",
        "datetime_updated": "2023-11-13 10:06:35"
      },
      {
        "id": "75",
        "has_promotion_code": "0",
        "name": "Explore the many facets of Phuket that go beyond your wildest imagination with Vacay.",
        "slug": "explore-the-many-facets-of-phuket-that-go-beyond-your-wildest-imagination-with-vacay",
        "description": "\u003Cp\u003E\u003Cstrong\u003EPhuket, THAILAND\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EBeyond the beautiful beaches, Phuket boasts a rich cultural heritage, exemplified by its distinctive Sino-Portuguese architecture.\u003C/p\u003E\u003Cp\u003EMoreover, from May to October, it offers prime surfing conditions at renowned locations like Kata, Karon Beach, and Naithorn. Discover the enchanting wonders of Phuket and turn your dream destination into a reality with Vacay!\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://www.facebook.com/vacay.co.th\"\u003EFollow Me\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand.&nbsp;\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp; &nbsp; &nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com &nbsp; &nbsp;&nbsp;\u003Cbr\u003EMobile: +66 (0)91 720 5665&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EAddress &nbsp; &nbsp;\u003C/strong\u003E &nbsp;\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand. &nbsp; &nbsp;\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com &nbsp; &nbsp; &nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0)86 342 9526 &nbsp; &nbsp; &nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003ESocial: \u003Ca href=\"https://www.facebook.com/vacay.co.th\"\u003Evacaythailland\u003C/a\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp;\u003C/strong\u003E &nbsp; &nbsp;&nbsp;\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours. &nbsp; &nbsp;&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Ca href=\"https://www.vacaybeds.com/\"\u003EThailand Is Waiting For You To Discover For More Detail\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2023-10-01",
        "end_date": "2026-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "Sino-Portuguese architecture",
        "view": "4886",
        "alt_text": "#vacay #Vacaythailand #Phuket #Bangkok #ChiangMai #KhonKaen",
        "rating": "5",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-10-11 16:07:52",
        "thumbnail_file": {
          "id": "26177",
          "title": "ff0a16f7bd220830e475547bf58ea5c9.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/26177/ff0a16f7bd220830e475547bf58ea5c9.jpeg",
          "file_type": "image/jpeg",
          "file_size": "285837",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-10-11 14:08:49",
        "datetime_updated": "2023-10-11 16:07:52"
      },
      {
        "id": "76",
        "has_promotion_code": "0",
        "name": "Phuket, known as the \"City of Gastronomy,\"",
        "slug": "phuket-known-as-the-city-of-gastronomy",
        "description": "\u003Cp\u003E\u003Cstrong\u003EPHUKET\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EThe City of Gastronomy is a culinary haven blending Thai traditions with international influences.\u003C/p\u003E\u003Cp\u003EEnjoy authentic Thai dishes like Pad Thai and Tom Yum Goong, while also savoring unique Sino-Portuguese-inspired creations. With its seafood delights and vibrant street food scene, Phuket offers a diverse and delicious dining experience in various settings, from beachside to upscale restaurants.\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://www.facebook.com/vacay.co.th\"\u003EFollow Me\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand &nbsp; &nbsp;&nbsp;\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp; &nbsp; &nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com &nbsp; &nbsp;&nbsp;\u003Cbr\u003EMobile: +66 (0)91 720 5665&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EAddress &nbsp; &nbsp;\u003C/strong\u003E &nbsp;\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand. &nbsp; &nbsp;\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com &nbsp; &nbsp; &nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0)86 342 9526 &nbsp; &nbsp; &nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003ESocial: vacaythailland &nbsp; &nbsp; &nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp;&nbsp;\u003C/strong\u003E &nbsp; &nbsp;\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours. &nbsp; &nbsp;&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Ca href=\"https://www.vacaybeds.com/\"\u003EThailand Is Waiting For You To Discover For More Detail\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2023-10-01",
        "end_date": "2026-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "The City of Gastronomy",
        "view": "6020",
        "alt_text": "#phuket #thailand #Phuketfood #Thaifood",
        "rating": "5",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40461",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-10-11 16:07:11",
        "thumbnail_file": {
          "id": "26180",
          "title": "c1af0a56c357386b02dcb4653d48f980.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/26180/c1af0a56c357386b02dcb4653d48f980.jpeg",
          "file_type": "image/jpeg",
          "file_size": "168287",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Transportation",
        "place_name": "Vacay Transportation",
        "type": "transportation",
        "lang": "en",
        "datetime_created": "2023-10-11 14:23:48",
        "datetime_updated": "2023-10-11 16:07:11"
      },
      {
        "id": "73",
        "has_promotion_code": "0",
        "name": "The Journey to become the first low carbon destination in Thailand.",
        "slug": "the-journey-to-become-the-first-low-carbon-destination-in-thailand",
        "description": "\u003Cp\u003E\u003Cstrong\u003EKo Mak, Trat, Thailand\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EDiscovering Koh Mak\u003Cstrong\u003E \u003C/strong\u003Ethe award winning Green Destinations Story Awards at ITB Berlin 2023 in Germany the first low carbon destination in Thailand that offering of meaningful tourism experiences to tourists located near Koh Chang in the Gulf of Thailand, Koh Mak is one of those secret islands preserved from mass tourism.&nbsp;\u003C/p\u003E\u003Cp\u003EKoh Mak has managed to retain a sense of tranquility and peacefulness. It's an ideal place for those seeking a quiet and intimate getaway away. Visitors can experience the warm hospitality of the locals, taste delicious Thai cuisine, and immerse themselves in the island's authentic culture&nbsp;\u003C/p\u003E\u003Cp\u003EKoh Mak is calling, and the adventure of a lifetime awaits!\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://www.facebook.com/vacay.co.th\"\u003EFollow Me\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E&nbsp;\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand &nbsp; &nbsp;\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp; &nbsp;&nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com &nbsp; &nbsp;\u003Cbr\u003EMobile: +66 (0)91 720 5665\u003C/p\u003E\u003Cp\u003EAddress &nbsp; &nbsp;&nbsp;\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp; &nbsp; &nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand. &nbsp;&nbsp;\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com &nbsp; &nbsp;&nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0)86 342 9526 &nbsp; &nbsp;&nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp; &nbsp; &nbsp;\u003Cbr\u003ESocial: vacaythailland &nbsp; &nbsp;&nbsp;\u003C/p\u003E\u003Cp\u003EPLAN YOUR TRIP &nbsp; &nbsp; &nbsp;\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours. &nbsp; &nbsp;\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"vacaybeds.com\"\u003EThailand Is Waiting For You To Discover For More Detail\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2023-08-01",
        "end_date": "2025-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "Green Destinations Story Awards at ITB Berlin 2023",
        "view": "9451",
        "alt_text": "#KohMak #Trat #เกาะหมาก #ตราด #Thailand #ITB #Awardwinning  #Lowcarbon #Sustainable #Vacay #vacaythailand",
        "rating": "5",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-08-16 11:56:00",
        "thumbnail_file": {
          "id": "25456",
          "title": "dc2e9ce1acb71c3064752366e056783b.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/25456/dc2e9ce1acb71c3064752366e056783b.jpeg",
          "file_type": "image/jpeg",
          "file_size": "133041",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-08-12 14:01:52",
        "datetime_updated": "2023-08-16 11:56:00"
      },
      {
        "id": "68",
        "has_promotion_code": "0",
        "name": "Exploring the Bridge of the river Kwai unveils layers of history and offers a glimpse into the past, connecting visitors to the remnants of Death Railway during World War II.",
        "slug": "exploring-the-bridge-of-the-river-kwai-unveils-layers-of-history-and-offers-a-glimpse-into-the-past-connecting-visitors-to-the-remnants-of-death-railway-during-world-war-ii",
        "description": "\u003Cp\u003E\u003Cstrong\u003EKanchanaburi, Thailand\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EThe Bridge of the river Kwai is an iconic landmark that echoes with historical significance. The bridge was part of the railway lines in World War II, Of all the remnants of war history in Thailand Now day visitors can walk across its sturdy tracks, taking in the picturesque surroundings and reflecting on the bridge's storied past.&nbsp;\u003C/p\u003E\u003Cp\u003EWhether you're a solo traveler, a couple seeking a romantic getaway, or a family in search of adventure, we have the perfect package for you.\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://www.facebook.com/vacay.co.th\"\u003EFollow Me\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand &nbsp;&nbsp;\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp; &nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com &nbsp;&nbsp;\u003Cbr\u003EMobile: +66 (0)91 720 5665 &nbsp; &nbsp; &nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EAddress &nbsp; &nbsp;\u003C/strong\u003E\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand. &nbsp;\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com &nbsp; &nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0)86 342 9526 &nbsp; &nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp; &nbsp;&nbsp;\u003Cbr\u003ESocial: vacaythailland &nbsp; &nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp; &nbsp;&nbsp;\u003C/strong\u003E\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours. &nbsp;&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Ca href=\"www.vacaybeds.com\"\u003EThailand Is Waiting For You To Discover For More Detail\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2023-08-01",
        "end_date": "2025-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "The Bridge of the river Kwai is an iconic landmark",
        "view": "7695",
        "alt_text": "#vacay #vacaythailand   #BridgeOfRiverKwai #DeathRailWay #RiverKwai #Kanchanaburi  #ทางรถไฟสายมรณะ #สะพานข้ามแม่น้ําแคว #กาญจนบุรี #vacay #vacaythailand",
        "rating": "5",
        "sort": "0",
        "is_pin": "0",
        "place_id": "40461",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-08-10 14:07:03",
        "thumbnail_file": {
          "id": "25227",
          "title": "7ecd554abee22d172e75a0d443bd5dd7.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/25227/7ecd554abee22d172e75a0d443bd5dd7.jpeg",
          "file_type": "image/jpeg",
          "file_size": "173238",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Transportation",
        "place_name": "Vacay Transportation",
        "type": "transportation",
        "lang": "en",
        "datetime_created": "2023-08-05 18:51:54",
        "datetime_updated": "2023-08-10 14:07:03"
      },
      {
        "id": "69",
        "has_promotion_code": "0",
        "name": "Embark on a spiritual journey and discover the divine beauty of Wat Phra Mahathat Woramahawihan.",
        "slug": "embark-on-a-spiritual-journey-and-discover-the-divine-beauty-of-wat-phra-mahathat-woramahawihan",
        "description": "\u003Cp\u003E\u003Cstrong\u003ENakhon Si Thammarat, Thailand\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EEmbark on a spiritual journey and discover the divine beauty of Wat Phra Mahathat Woramahawihan.\u003C/p\u003E\u003Cp\u003EWat Phra Mahathat Wora Mahawihan, previously known as Wat Phra Barommathat, a first-class royal temple of the Woramahawihan class the royal monastery in the advanced level in the type of Wora Mahawihan and has the old construction period with importance in terms of religion and recognizing this important contribution in 2012, UNESCO placed the temple on a tentative list of world heritage sites.\u003C/p\u003E\u003Cp\u003EAs one of the oldest temples in southern Thailand, The temple holds immense historical significance. It has withstood the test of time, witnessing the rise and fall of empires and the grand central pagoda stands as a testament to the blending of Thai, Sri Lankan, and Javanese architecture.\u003C/p\u003E\u003Cp\u003EWe eagerly await the opportunity to provide you with all the trip details you need and to be a part of your upcoming adventure.\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://www.facebook.com/vacay.co.th\"\u003EFollow Me.\u003C/a\u003E\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand &nbsp;&nbsp;\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp; &nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com &nbsp;&nbsp;\u003Cbr\u003EMobile: +66 (0) 91 720 5665 &nbsp; &nbsp; &nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EAddress &nbsp; &nbsp;\u003C/strong\u003E\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand. &nbsp;\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com &nbsp; &nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0) 86 342 9526 &nbsp; &nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp; &nbsp;&nbsp;\u003Cbr\u003ESocial: vacaythailland &nbsp; &nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp; &nbsp;&nbsp;\u003C/strong\u003E\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours. &nbsp;&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Ca href=\"https://www.vacaybeds.com/\"\u003EThailand Is Waiting For You To Discover For More Detail\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2023-08-01",
        "end_date": "2025-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "Wat Phra Barommathat",
        "view": "4844",
        "alt_text": "#WatPhraMahathatWoramahaWihan #NakhonSiThammarat #Buddhist #ThailandTemple #vacay #vacaythailand #Thailand",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-08-10 14:04:33",
        "thumbnail_file": {
          "id": "25231",
          "title": "27f8e0166357944a160a7e29e97a3ae5.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/25231/27f8e0166357944a160a7e29e97a3ae5.jpeg",
          "file_type": "image/jpeg",
          "file_size": "179563",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-08-05 19:20:17",
        "datetime_updated": "2023-08-10 14:04:33"
      },
      {
        "id": "70",
        "has_promotion_code": "0",
        "name": "Vacay invites you to discover the hidden gems and breathtaking beauty of Koh Samui.",
        "slug": "vacay-invites-you-to-discover-the-hidden-gems-and-breathtaking-beauty-of-koh-samui",
        "description": "\u003Cp\u003EVacay invites you to discover the hidden gems and breathtaking beauty of Koh Samui, Let s dive into a list of endless beauty of Koh Samui\u003C/p\u003E\u003Cp\u003E-️ Soak up the stunning sunset at\u003Cstrong\u003E Lamai Overlap Stone \u003C/strong\u003Ebefore continuing your adventure with a unique insight into Buddhist and Thai culture at Big Buddha Temple (Wat Phra Yai)\u003C/p\u003E\u003Cp\u003E- Explore the unique beauty of ???????????? ???????????????????????? ???????????????????????? (Wat Phra Yai) where An architectural wonder and spiritual oasis &nbsp;\u003C/p\u003E\u003Cp\u003E-️ Experience the mystique and beauty of the \u003Cstrong\u003EGrandfather and Grandmother Rocks \u003C/strong\u003E(Hin Ta Hin Yai) in Koh Samui's natural landscape\u003C/p\u003E\u003Cp\u003EReach out to us and we'll be delighted to provide you with the additional information you seek.&nbsp;\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand &nbsp;&nbsp;\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp; &nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com &nbsp;&nbsp;\u003Cbr\u003EMobile: +66 (0) 91 720 5665 &nbsp; &nbsp; &nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EAddress &nbsp; &nbsp;\u003C/strong\u003E\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp; &nbsp;&nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand. &nbsp;\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com &nbsp; &nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0) 86 342 9526 &nbsp; &nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp; &nbsp;&nbsp;\u003Cbr\u003ESocial: vacaythailland &nbsp; &nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp; &nbsp;&nbsp;\u003C/strong\u003E\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours. &nbsp;&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Ca href=\"https://www.vacaybeds.com/\"\u003EThailand Is Waiting For You To Discover For More Detail\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2023-08-01",
        "end_date": "2026-08-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "Let s dive into a list of endless beauty of Samui",
        "view": "4634",
        "alt_text": "#kohsamui #samui #OverlapStone #Bigbuddha #Watphrayai #Lamai #Grandfatherandgrandmotherrocks #Hintahinyai #หินตาหินยาย #วัดพระใหญ่  #สมุย #เกาะสมุย #Thailand #vacay #vacaythailand",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-08-10 14:04:22",
        "thumbnail_file": {
          "id": "25234",
          "title": "75c0d139a00658180d5bcf2ffa77a02b.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/25234/75c0d139a00658180d5bcf2ffa77a02b.jpeg",
          "file_type": "image/jpeg",
          "file_size": "199550",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-08-05 19:38:28",
        "datetime_updated": "2023-08-10 14:04:22"
      },
      {
        "id": "65",
        "has_promotion_code": "0",
        "name": "Wat Arun or Temple of Dawn is located along with Chao Phraya river.",
        "slug": "wat-arun-or-temple-of-dawn-is-located-along-with-chao-phraya-river",
        "description": "\u003Cp\u003E\u003Cstrong\u003EWat Arun or Temple of Dawn is located along with Chao Phraya river.\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EOne of the most famous landmarks and most photographed icons of Thailand. This remarkable temple area is a quite large and so there are many beautiful buildings, pavilions and statues to discover.&nbsp;\u003C/p\u003E\u003Cp\u003EThe best time for a visit is in the morning or late afternoon. At this time it is most quiet and idyllic. Particularly scenic are magnificent 70-meter-high pagodas with colourful porcelain pieces from China as decoration which are beautifully lighted at night. Many consider Wat Arun as one of the most beautiful temples in Bangkok and so a visit is highly recommended.\u003C/p\u003E\u003Cp\u003ENo wonder that it is considered to be one of the most Instagrammable places in Bangkok.\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand &nbsp;\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp;&nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com &nbsp;\u003Cbr\u003EMobile: +66 (0) 91 720 5665 &nbsp; &nbsp;&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EAddress &nbsp;&nbsp;\u003C/strong\u003E\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp; &nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand.&nbsp;\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com &nbsp;&nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0) 86 342 9526 &nbsp;&nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp; &nbsp;\u003Cbr\u003ESocial: vacaythailland &nbsp;&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp; &nbsp;\u003C/strong\u003E\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours. &nbsp;\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"www.vacaybeds.com\"\u003E\u003Cstrong\u003EThailand is waiting for you to discover for more detail\u003C/strong\u003E\u003C/a\u003E\u003C/p\u003E",
        "start_date": "2023-04-01",
        "end_date": "2025-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "The most Instagrammable places in Bangkok",
        "view": "7588",
        "alt_text": "#vacay #vacaythailand #Thailand  #วัดอรุณ #wataruntemple #watarun #templeofdawn #temple #bangkok #thailand",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-04-28 09:43:17",
        "thumbnail_file": {
          "id": "23312",
          "title": "0fc2042b4028a7df60098123363d9299.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/23312/0fc2042b4028a7df60098123363d9299.jpeg",
          "file_type": "image/jpeg",
          "file_size": "141794",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-04-27 15:09:46",
        "datetime_updated": "2023-04-28 09:43:17"
      },
      {
        "id": "64",
        "has_promotion_code": "0",
        "name": "Spicy as your are with signature Thai dishes.",
        "slug": "spicy-as-your-are-with-signature-thai-dishes",
        "description": "\u003Cp\u003EVacay offers you a range of services from one day island trip, incentive &amp; meeting to \"Food specialist tour\". Thailand is known as a land of gastronomy with its authentic taste and ingredients, our tour will take you to the local famous dishes to Michelin star dining. &nbsp;\u003Cbr\u003E\u003Cbr\u003EWhich is your bias for Thai dishes? Thailand is a paradise for food lovers with our signature spice and taste. Must try top three dishes to put on you list include Somtum, Tom Yum Koong and Pad Thai. Delight your day with Thai dishes, book a trip to Thailand with us now.\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand&nbsp;\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EContact us for more information and package detail at www.vacaybeds.com &nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com&nbsp;\u003Cbr\u003EMobile: +66 (0) 91 720 5665 &nbsp; &nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EAddress &nbsp;\u003C/strong\u003E\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp;&nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand.&nbsp;\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com &nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0) 86 342 9526 &nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp;&nbsp;\u003Cbr\u003ESocial: vacaythailland &nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp;&nbsp;\u003C/strong\u003E\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours.&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EThailand is waiting for you to discover for more detail\u003C/strong\u003E\u003C/p\u003E",
        "start_date": "2023-04-01",
        "end_date": "2025-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "Food specialist tour",
        "view": "3709",
        "alt_text": "#vacay #vacaythailand #food specialist tour #thai taste",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-04-27 13:57:47",
        "thumbnail_file": {
          "id": "23287",
          "title": "5bf8a1dc1b55e4c70d826a10b72a032d.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/23287/5bf8a1dc1b55e4c70d826a10b72a032d.jpeg",
          "file_type": "image/jpeg",
          "file_size": "199456",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-04-25 14:16:40",
        "datetime_updated": "2023-04-27 13:57:47"
      },
      {
        "id": "62",
        "has_promotion_code": "0",
        "name": "Koh Kradan one of the best Top 100 beaches on Earth 2023 by the World Beach Guide website of the United Kingdom.",
        "slug": "koh-kradan-one-of-the-best-top-100-beaches-on-earth-2023-by-the-world-beach-guide-website-of-the-united-kingdom",
        "description": "\u003Cp\u003EKoh Kradan one of the best Top 100 beaches on Earth 2023 by the World Beach Guide website of the United Kingdom.\u003C/p\u003E\u003Cp\u003EThis award-winning beach is located on the west coast of Thailand, Part of the Hat Chao Mai National Park Protection Unit ,Trang province.\u003C/p\u003E\u003Cp\u003Ehere you can wander and explore a frolic in the warm, turquoise ocean water, and build sandcastles to your heart’s delight! &nbsp;\u003Cbr\u003E\u003Cbr\u003E&nbsp;\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EContact us for more package detail at www.vacaybeds.com&nbsp;\u003Cbr\u003EEmail: enquiry@vacaybeds.com\u003Cbr\u003EMobile: +66 (0) 91 720 5665 &nbsp;&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EAddress&nbsp;\u003C/strong\u003E\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand.\u003Cbr\u003EEmail: rsvn-htl@vacaybeds.com&nbsp;\u003Cbr\u003EPhone/WhatsApp: +66 (0) 86 342 9526&nbsp;\u003Cbr\u003EWebsite: www.vacaybeds.com &nbsp;\u003Cbr\u003ESocial: vacaythailland&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp;\u003C/strong\u003E\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours.\u003C/p\u003E\u003Cblockquote\u003E\u003Cp\u003EThailand is waiting for you to discover for more detail\u003C/p\u003E\u003C/blockquote\u003E",
        "start_date": "2023-04-01",
        "end_date": "2025-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "Thailand is waiting for you to discover",
        "view": "4124",
        "alt_text": "#vacay #vacaythailand #kohkradan #เกาะกระดาน #worldbeachguide  #worldbestbeach2023 #beach #trang #Thailand",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-04-25 09:20:52",
        "thumbnail_file": {
          "id": "23201",
          "title": "caf25d4afcbcdd24199dc66167cc7bed.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/23201/caf25d4afcbcdd24199dc66167cc7bed.jpeg",
          "file_type": "image/jpeg",
          "file_size": "147751",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-04-23 19:38:46",
        "datetime_updated": "2023-04-25 09:20:52"
      },
      {
        "id": "63",
        "has_promotion_code": "0",
        "name": "Mango sticky rice - A Thai delicacy that crosses everyone’s mind as a national dessert.",
        "slug": "mango-sticky-rice-a-thai-delicacy-that-crosses-everyone-s-mind-as-a-national-dessert",
        "description": "\u003Cp\u003E&nbsp;It is bites of sweet, slightly salty coconut milk along with some fresh sweet ripe mangoes.&nbsp;\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EVegan\u003C/li\u003E\u003Cli\u003EGluten Free\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003Eif you're looking to try a new and exciting dessert, mango sticky rice is definitely worth a try.&nbsp;\u003Cbr\u003ENeed more food ideas and fun activities to do in Bangkok?\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand.&nbsp;\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EContact us for more package detail at www.vacaybeds.com&nbsp;\u003Cbr\u003EEmail. enquiry@vacaybeds.com&nbsp;\u003Cbr\u003EMobile. +66 (0) 91 720 5665 &nbsp;&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EAddress&nbsp;\u003C/strong\u003E\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp; &nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand.&nbsp;\u003C/p\u003E\u003Cp\u003EEmail. rsvn-htl@vacaybeds.com&nbsp;\u003Cbr\u003EPhone/WhatsApp. +66 (0) 86 342 9526&nbsp;\u003Cbr\u003EWebsite. www.vacaybeds.com &nbsp;\u003Cbr\u003ESocial. vacaythailland&nbsp;\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EPLAN YOUR TRIP &nbsp;\u003C/strong\u003E\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours.\u003C/p\u003E\u003Cblockquote\u003E\u003Cp\u003ESee our available tours www.vacaybeds.com\u003C/p\u003E\u003C/blockquote\u003E",
        "start_date": "2023-04-01",
        "end_date": "2025-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "See our available tours",
        "view": "2652",
        "alt_text": "#vacay #vacaythailand #ข้าวเหนียวมะม่วง   #mangos  #mangostickyrice  #thaimangostickyrice #glutanfree #vegan #streetfood #summer #thaifood #thailand",
        "rating": "0",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-04-25 09:10:50",
        "thumbnail_file": {
          "id": "23204",
          "title": "d1254b3b615e61f3f139a9d9e7cbb384.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/23204/d1254b3b615e61f3f139a9d9e7cbb384.jpeg",
          "file_type": "image/jpeg",
          "file_size": "146191",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-04-23 19:49:14",
        "datetime_updated": "2023-04-25 09:10:50"
      },
      {
        "id": "61",
        "has_promotion_code": "0",
        "name": "The Ayutthaya by Cruise Program promises a remarkable journey to Thailand's World Heritage City.",
        "slug": "the-ayutthaya-by-cruise-program-promises-a-remarkable-journey-to-thailand-s-world-heritage-city",
        "description": "\u003Cp\u003E\u003Cstrong\u003EThe Ayutthaya by Cruise Program promises a remarkable journey to Thailand's World Heritage City.\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EAs you explore this historic capital of Thailand, you'll be transported back in time to a bygone era of grand palaces, temples, and monuments, all of which offer a glimpse into the kingdom's rich cultural and architectural heritage.&nbsp;\u003C/p\u003E\u003Cp\u003EAyutthaya boasts some of the most impressive ruins in Southeast Asia, with an abundance of temples, monasteries, and ancient structures to explore, such as the iconic Wat Mahathat, Wat Phrasrisanphet, Wat Lokaya, and Wat Chaiwatthanaram. These magnificent structures are steeped in history and feature intricate carvings, stunning architecture, and an unparalleled sense of grandeur.\u003C/p\u003E",
        "condition": "\u003Cp\u003E\u003Cstrong\u003ELet us be your consultant in everyday when traveling to Thailand.\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EContact us for more package detail at www.vacaybeds.com\u003Cbr\u003EMobile. +66 091 720 5665 &nbsp;\u003Cbr\u003EEmail. enquiry@vacaybeds.com\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EAddress\u003C/strong\u003E\u003Cbr\u003EVacay Co., Ltd. (Thailand) &nbsp;&nbsp;\u003Cbr\u003E18 Baromrajchonnee87, Baromrajchonnee Rd. Chimphli, Taling Chan, Bangkok 10170 Thailand.\u003C/p\u003E\u003Cp\u003EEmail. rsvn-htl@vacaybeds.com\u003Cbr\u003EPhone/WhatsApp. +66 086 342 9526\u003C/p\u003E\u003Cp\u003EWebsite. www.vacaybeds.com&nbsp;\u003Cbr\u003ESocial. vacaythailland\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EPLAN YOUR TRIP&nbsp;\u003C/strong\u003E\u003Cbr\u003EFor more information, please contact us and we will lapse within 48 hours.\u003C/p\u003E",
        "start_date": "2023-04-01",
        "end_date": "2025-12-31",
        "discount_type": "offer",
        "discount_percent": null,
        "original_price": null,
        "discount_price": null,
        "special_offer": "Contact us for more detail and tour program",
        "view": "4058",
        "alt_text": "#vacay #vacaythailand #Ayutthaya #Thailand",
        "rating": "5",
        "sort": "0",
        "is_pin": "0",
        "place_id": "39814",
        "campaign_id": "0",
        "has_total_limit": "0",
        "total_limit": null,
        "used": "0",
        "updater_id": "25699",
        "approver_id": "1124",
        "owner_id": "25699",
        "status": "approved",
        "remark": null,
        "hidden": "0",
        "datetime_approved": "2023-04-11 10:13:33",
        "thumbnail_file": {
          "id": "22936",
          "title": "c0acf8e43c8338933d25d36c29f5cffc.jpeg",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/business_promotion_thumbnail/22936/c0acf8e43c8338933d25d36c29f5cffc.jpeg",
          "file_type": "image/jpeg",
          "file_size": "225268",
          "file_data": {
            "resolutions": {
              "width": 1120,
              "height": 630
            }
          }
        },
        "branch": [],
        "category_name": "Tour Agent",
        "place_name": "VACAY THAILAND",
        "type": "tour_agent",
        "lang": "en",
        "datetime_created": "2023-04-09 14:10:20",
        "datetime_updated": "2023-04-11 10:13:33"
      }
    ]
  }
}
```

https://api.tourismthailand.org/api/survey/get_survey?Language=en&ip_address=2400:ac40:710:fc7f:45ad:a2fe:2537:c481&timestamp=1747932000600
```json
{
  "response_code": 200,
  "response_msg": "Success",
  "result": {
    "is_hide": false,
    "a_survey": {
      "id": "117",
      "name": "Overall, how satisfied are you with our website?",
      "link": "https://eform.tourismthailand.org/public/tourism-org-en-ma68",
      "a_country_code": [
        "ad",
        "ae",
        "af",
        "ag",
        "ai",
        "al",
        "am",
        "ao",
        "aq",
        "ar",
        "as",
        "at",
        "au",
        "aw",
        "ax",
        "az",
        "ba",
        "bb",
        "bd",
        "be",
        "bf",
        "bg",
        "bh",
        "bi",
        "bj",
        "bl",
        "bm",
        "bn",
        "bo",
        "bq",
        "br",
        "bs",
        "bt",
        "bv",
        "bw",
        "by",
        "bz",
        "ca",
        "cc",
        "cd",
        "cf",
        "cg",
        "ch",
        "ci",
        "ck",
        "cl",
        "cm",
        "cn",
        "co",
        "cr",
        "cu",
        "cv",
        "cw",
        "cx",
        "cy",
        "cz",
        "de",
        "dj",
        "dk",
        "dm",
        "do",
        "dz",
        "ec",
        "ee",
        "eg",
        "eh",
        "er",
        "es",
        "et",
        "fi",
        "fj",
        "fk",
        "fm",
        "fo",
        "fr",
        "ga",
        "gb",
        "gd",
        "ge",
        "gf",
        "gg",
        "gh",
        "gi",
        "gl",
        "gm",
        "gn",
        "gp",
        "gq",
        "gr",
        "gs",
        "gt",
        "gu",
        "gw",
        "gy",
        "hk",
        "hm",
        "hn",
        "hr",
        "ht",
        "hu",
        "id",
        "ie",
        "il",
        "im",
        "in",
        "io",
        "iq",
        "ir",
        "is",
        "it",
        "je",
        "jm",
        "jo",
        "jp",
        "ke",
        "kg",
        "kh",
        "ki",
        "km",
        "kn",
        "kp",
        "kr",
        "kw",
        "ky",
        "kz",
        "la",
        "lb",
        "lc",
        "li",
        "lk",
        "lr",
        "ls",
        "lt",
        "lu",
        "lv",
        "ly",
        "ma",
        "mc",
        "md",
        "me",
        "mf",
        "mg",
        "mh",
        "mk",
        "ml",
        "mm",
        "mn",
        "mo",
        "mp",
        "mq",
        "mr",
        "ms",
        "mt",
        "mu",
        "mv",
        "mw",
        "mx",
        "my",
        "mz",
        "na",
        "nc",
        "ne",
        "nf",
        "ng",
        "ni",
        "nl",
        "no",
        "np",
        "nr",
        "nu",
        "nz",
        "om",
        "pa",
        "pe",
        "pf",
        "pg",
        "ph",
        "pk",
        "pl",
        "pm",
        "pn",
        "pr",
        "ps",
        "pt",
        "pw",
        "py",
        "qa",
        "re",
        "ro",
        "rs",
        "ru",
        "rw",
        "sa",
        "sb",
        "sc",
        "sd",
        "se",
        "sg",
        "sh",
        "si",
        "sj",
        "sk",
        "sl",
        "sm",
        "sn",
        "so",
        "sr",
        "ss",
        "st",
        "sv",
        "sx",
        "sy",
        "sz",
        "tc",
        "td",
        "tf",
        "tg",
        "th",
        "tj",
        "tk",
        "tl",
        "tm",
        "tn",
        "to",
        "tr",
        "tt",
        "tv",
        "tw",
        "tz",
        "ua",
        "ug",
        "um",
        "us",
        "uy",
        "uz",
        "va",
        "vc",
        "ve",
        "vg",
        "vi",
        "vn",
        "vu",
        "wf",
        "ws",
        "xk",
        "ye",
        "yt",
        "za",
        "zm",
        "zw"
      ],
      "datetime_start": "2025-05-01",
      "datetime_end": "2025-05-31",
      "hidden": "0"
    }
  }
}
```

https://api.tourismthailand.org/api/home/get_pr_banner?Language=en&timestamp=1747932000600
```json
{
  "response_code": 200,
  "response_msg": "Success",
  "result": [
    {
      "id": "166",
      "title": "youtube",
      "short_description": "Amazing Thailand",
      "url": "https://www.youtube.com/@Thailand",
      "thumb_image": {
        "id": "32504",
        "title": "youtube",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-32504.png",
        "file_type": "image/png",
        "file_size": "390135",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "89",
      "title": "เว็บไซต์ผู้ประกอบการ",
      "short_description": "เว็บไซต์ผู้ประกอบการ",
      "url": "https://operator.tourismthailand.org/",
      "thumb_image": {
        "id": "10994",
        "title": "เว็บไซต์ผู้ประกอบการ",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/22320-10994.png",
        "file_type": "image/png",
        "file_size": "168170",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "37",
      "title": "Thai Travel Mart",
      "short_description": "Thai Travel Mart",
      "url": "http://www.thaitravelmart.com/",
      "thumb_image": {
        "id": "26107",
        "title": "Thai Travel Mart",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-26107.png",
        "file_type": "image/png",
        "file_size": "161966",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "38",
      "title": "Tourist Hotline 1672",
      "short_description": "TAT Contact Center Tourist Hotline 1672",
      "url": "http://110.78.162.27/wcs_1_2_webchatcustomer/start.aspx",
      "thumb_image": {
        "id": "4015",
        "title": "Tourist Hotline 1672",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1-4015.png",
        "file_type": "image/png",
        "file_size": "54511",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "40",
      "title": "7 Greens Tourism",
      "short_description": "7 Greens Tourism",
      "url": "https://7greens.tourismthailand.org/home/",
      "thumb_image": {
        "id": "4019",
        "title": "7 Greens Tourism",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1-4019.png",
        "file_type": "image/png",
        "file_size": "388276",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "16",
      "title": "Tourism Product",
      "short_description": "Tourism Product gathers interesting information about various types of travel. You can quickly and accurately search the books you are looking for and download them for free.",
      "url": "http://tourismproduct.tourismthailand.org/",
      "thumb_image": {
        "id": "3799",
        "title": "Tourism Product",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1-3799.png",
        "file_type": "image/png",
        "file_size": "194829",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "49",
      "title": "TAGTHAi",
      "short_description": "Get TAGTHAi, your one-stop travel app and see Thailand like you’ve never experienced before. Pick your ride. Book your stay. Choose your meal. Plan your trip … exactly the way you like. Get more choices, more suggestions, your app, your holiday. #TAGTHAi",
      "url": "https://bit.ly/34srOmG",
      "thumb_image": {
        "id": "4182",
        "title": "TAGTHAi",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/129-4182.png",
        "file_type": "image/png",
        "file_size": "338113",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "4",
      "title": "Royal Grand Palace",
      "short_description": "Online tickets must be purchased at least 24 hours prior to collection.",
      "url": "https://www.royalgrandpalace.th/en/home",
      "thumb_image": {
        "id": "928",
        "title": "Royal Grand Palace",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1-928.png",
        "file_type": "image/png",
        "file_size": "152431",
        "file_data": {
          "resolutions": {
            "width": 332,
            "height": 249
          }
        }
      }
    },
    {
      "id": "134",
      "title": "E brochure",
      "short_description": "e brochure",
      "url": "https://tatmediaassets.com/team/ebrochure",
      "thumb_image": {
        "id": "26253",
        "title": "E brochure",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-26253.png",
        "file_type": "image/png",
        "file_size": "258445",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "6",
      "title": "TAT welcomes you to follow all informations about Thailand's festivals here",
      "short_description": "Get new experiences of Thailand's tourism festivals, with chances to win prizes every month. Get started here!",
      "url": "https://www.thailandfestival.org",
      "thumb_image": {
        "id": "24355",
        "title": "TAT welcomes you to follow all informations about Thailand's festivals here",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-24355.png",
        "file_type": "image/png",
        "file_size": "325294",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "73",
      "title": "Thailand Elite",
      "short_description": "Privilege Visa for Long Stay",
      "url": "https://www.thailandelite.com/?locate=en",
      "thumb_image": {
        "id": "8342",
        "title": "Thailand Elite",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-8342.png",
        "file_type": "image/png",
        "file_size": "60762",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "103",
      "title": "Visit Southeast Asia",
      "short_description": "Experience a world few could only imagine, from majestic rainforests and endless beaches to cultures that seem almost magical, these are the wonders of Southeast Asia. We warmly welcome you here.",
      "url": "https://www.visitsoutheastasia.travel/",
      "thumb_image": {
        "id": "18022",
        "title": "Visit Southeast Asia",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-18022.png",
        "file_type": "image/png",
        "file_size": "55500",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "120",
      "title": "mekongtourism",
      "short_description": "mekongtourism",
      "url": "https://mekongtourism.org/",
      "thumb_image": {
        "id": "22102",
        "title": "mekongtourism",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/129-22102.png",
        "file_type": "image/png",
        "file_size": "41271",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "137",
      "title": "Thailand remote work",
      "short_description": "We provide remote workers with a comprehensive list of co-working spaces, co-living spaces, activities and tourist attractions across Thailand.",
      "url": "https://thailandremote.work/public/home",
      "thumb_image": {
        "id": "25977",
        "title": "Thailand remote work",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-25977.png",
        "file_type": "image/png",
        "file_size": "291081",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "133",
      "title": "IMT-GT 2023-2025",
      "short_description": "Indonesia-Malaysia-Thailand Growth Triangle",
      "url": "https://imtgt.org/",
      "thumb_image": {
        "id": "24357",
        "title": "IMT-GT 2023-2025",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-24357.png",
        "file_type": "image/png",
        "file_size": "95132",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "139",
      "title": "Happy Link",
      "short_description": "Happy Link Thailand English",
      "url": "https://happylinkthailand.com/The_link_eng/",
      "thumb_image": {
        "id": "26115",
        "title": "Happy Link",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/129-26115.png",
        "file_type": "image/png",
        "file_size": "139092",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "160",
      "title": "Survey of opinions and needs of tourists or visitors",
      "short_description": "This questionnaire is part of the behavioral survey and satisfaction survey for tourists or visitors who had or having experience(s) visiting Thailand.",
      "url": "https://docs.google.com/forms/d/e/1FAIpQLSe14d5zC6ND-KtgbwFMwYGMdJk01MxyMbQQexr4vDMTQIpLHA/viewform",
      "thumb_image": {
        "id": "32038",
        "title": "Survey of opinions and needs of tourists or visitors",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-32038.png",
        "file_type": "image/png",
        "file_size": "238529",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "168",
      "title": "Travel Proud",
      "short_description": "We filter places, not people. Through our Travel Proud programme, we’re helping to make travel more inclusive for LGBTQ+ travellers.",
      "url": "https://www.booking.com/proud.en-gb.html?aid=318615&label=New_Thai_TH_TH_27026984425-pU4XueM8sr6r3eLLD4aA%2AwS217244370918%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-55482331735%3Alp9197704%3Ali%3Adec%3Adm&sid=d13c51c1b2d8daedbe346f2c99fbaa0b&tmpl=landing_pages%2Fproud&lang=en-gb&soz=1&lang_click=other&cdl=th&lang_changed=1",
      "thumb_image": {
        "id": "32699",
        "title": "Travel Proud",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-32699.png",
        "file_type": "image/png",
        "file_size": "249854",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "172",
      "title": "Thai SELECT Thai Cuisine",
      "short_description": "Thai SELECT Thai Cuisine",
      "url": "https://online.anyflip.com/jizol/qqnv/mobile/index.html",
      "thumb_image": {
        "id": "33257",
        "title": "Thai SELECT Thai Cuisine",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-33257.png",
        "file_type": "image/png",
        "file_size": "197550",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "179",
      "title": "NARIT",
      "short_description": "NARIT",
      "url": "https://www.narit.or.th/en",
      "thumb_image": {
        "id": "36115",
        "title": "NARIT",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-36115.png",
        "file_type": "image/png",
        "file_size": "273298",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "180",
      "title": "Siam Fantasy",
      "short_description": "Gateway to the Wonders of Siam",
      "url": "https://siamfantasy.com/",
      "thumb_image": {
        "id": "36592",
        "title": "Siam Fantasy",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-36592.png",
        "file_type": "image/png",
        "file_size": "368241",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "183",
      "title": "infocomm asia 2025",
      "short_description": "23-25 July 2025",
      "url": "https://www.infocomm-asia.com/en/",
      "thumb_image": {
        "id": "37063",
        "title": "infocomm asia 2025",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-37063.png",
        "file_type": "image/png",
        "file_size": "191432",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    },
    {
      "id": "185",
      "title": "TTM+2025",
      "short_description": "ChiangMai",
      "url": "https://www.thailandtravelmartplus.com/",
      "thumb_image": {
        "id": "37065",
        "title": "TTM+2025",
        "description": "",
        "url": "https://api.tourismthailand.org/upload/live/pr_banner/1124-37065.png",
        "file_type": "image/png",
        "file_size": "213691",
        "file_data": {
          "resolutions": {
            "width": 455,
            "height": 340
          }
        }
      }
    }
  ]
}
```

https://api.tourismthailand.org/api/home/get_plan_your_trip?Language=en&timestamp=1747932000600
```json
{
  "response_code": 200,
  "response_msg": "Success",
  "result": [
    {
      "title": "Visa & Passport",
      "description": "",
      "url": "https://www.tourismthailand.org/Articles/plan-your-trip-passportandvisa",
      "icon_url": "https://api.tourismthailand.org/asset/home/plan_your_trip/Visa.svg"
    },
    {
      "title": "Travel to Thailand",
      "description": "",
      "url": "https://www.tourismthailand.org/Articles/plan-your-trip-around-thailand",
      "icon_url": "https://api.tourismthailand.org/asset/home/plan_your_trip/Travel.svg"
    },
    {
      "title": "Getting Around",
      "description": "",
      "url": "https://www.tourismthailand.org/Articles/plan-your-trip-around-cities",
      "icon_url": "https://api.tourismthailand.org/asset/home/plan_your_trip/Train.svg"
    },
    {
      "title": "Weather",
      "description": "",
      "url": "https://www.tourismthailand.org/Plan-Your-Trip/Weather?province=219",
      "icon_url": "https://api.tourismthailand.org/asset/home/plan_your_trip/Weather.svg"
    }
  ]
}
```

https://api.tourismthailand.org/api/data/get_language?Language=en&timestamp=1747932000600
```json
{
  "response_code": 200,
  "response_msg": "Success",
  "result": [
    {
      "id": "1",
      "code": "en",
      "name": "International",
      "sub_domain": "www",
      "is_external": "0",
      "external_link": null,
      "image_path": "https://api.tourismthailand.org/asset/language/en.png"
    },
    {
      "id": "2",
      "code": "th",
      "name": "ประเทศไทย",
      "sub_domain": "thai",
      "is_external": "0",
      "external_link": null,
      "image_path": "https://api.tourismthailand.org/asset/language/th.png"
    },
    {
      "id": "3",
      "code": "cn",
      "name": "中国",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "http://amazingthailand.org.cn/",
      "image_path": "https://api.tourismthailand.org/asset/language/cn.png"
    },
    {
      "id": "4",
      "code": "in",
      "name": "India",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "http://tourismthailand.in",
      "image_path": "https://api.tourismthailand.org/asset/language/in.png"
    },
    {
      "id": "5",
      "code": "id",
      "name": "Indonesia",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "https://www.wisatathailand.id/",
      "image_path": "https://api.tourismthailand.org/asset/language/id.png"
    },
    {
      "id": "6",
      "code": "it",
      "name": "Italia",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "http://www.turismothailandese.it/",
      "image_path": "https://api.tourismthailand.org/asset/language/it.png"
    },
    {
      "id": "7",
      "code": "jp",
      "name": "日本",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "https://www.thailandtravel.or.jp/",
      "image_path": "https://api.tourismthailand.org/asset/language/jp.png"
    },
    {
      "id": "8",
      "code": "kr",
      "name": "한국",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "http://www.visitthailand.or.kr/thai/",
      "image_path": "https://api.tourismthailand.org/asset/language/kr.png"
    },
    {
      "id": "9",
      "code": "my",
      "name": "Malaysia",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "http://www.tourismthailand.my/",
      "image_path": "https://api.tourismthailand.org/asset/language/my.png"
    },
    {
      "id": "10",
      "code": "es",
      "name": "España",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "http://www.turismotailandes.com/",
      "image_path": "https://api.tourismthailand.org/asset/language/es.png"
    },
    {
      "id": "11",
      "code": "ru",
      "name": "Россия",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "https://tourismthailand.ru/",
      "image_path": "https://api.tourismthailand.org/asset/language/ru.png"
    },
    {
      "id": "12",
      "code": "sg",
      "name": "Singapore",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "https://tourismthailand.sg/",
      "image_path": "https://api.tourismthailand.org/asset/language/sg.png"
    },
    {
      "id": "13",
      "code": "cz",
      "name": "Czech",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "https://amazingthailand.cz/",
      "image_path": "https://api.tourismthailand.org/asset/language/cz.png"
    },
    {
      "id": "14",
      "code": "ua",
      "name": "Ukraine",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "http://tourismthailand.com.ua/",
      "image_path": "https://api.tourismthailand.org/asset/language/ua.png"
    },
    {
      "id": "15",
      "code": "ro",
      "name": "Romania",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "https://thailanda.ro/",
      "image_path": "https://api.tourismthailand.org/asset/language/ro.png"
    },
    {
      "id": "16",
      "code": "pl",
      "name": "Poland",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "http://www.amazingthailand.pl",
      "image_path": "https://api.tourismthailand.org/asset/language/pl.png"
    },
    {
      "id": "17",
      "code": "bg",
      "name": "Bulgaria",
      "sub_domain": null,
      "is_external": "1",
      "external_link": "https://thailand.bg",
      "image_path": "https://api.tourismthailand.org/asset/language/bg.png"
    }
  ]
}
```

https://api.tourismthailand.org/api/home/get_region?Language=en&timestamp=1747932000600
```json
{
  "response_code": 200,
  "response_msg": "Success",
  "result": {
    "regions": [
      {
        "id": "1",
        "name": "North",
        "short_description": "The north of the country borders Myanmar and Laos. The northernmost point is Amphoe Mae Sai, Chiang Rai Province, with tourist attractions like Mae Sai Market, Golden Triangle, Wat Phra That Doi Wao, and Wat Thampla (locally known as Money Temple).",
        "thumb_image": {
          "id": "761",
          "title": "71df362846125ed7cebe0e953ff1ef35.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/region/1-761.png",
          "file_type": "image/png",
          "file_size": "133886",
          "file_data": {
            "resolutions": {
              "width": 273,
              "height": 205
            }
          }
        },
        "top_destination": [
          {
            "id": "101",
            "name": "Chiang Mai",
            "thumb_image": {
              "id": "9069",
              "title": "b8c253885c93c296d44c90297c93c055.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1124-9069.png",
              "file_type": "image/png",
              "file_size": "647979",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "102",
            "name": "Chiang Rai",
            "thumb_image": {
              "id": "1948",
              "title": "db88ace07f4d832b227a14c2a15722a1.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1-1948.png",
              "file_type": "image/png",
              "file_size": "306355",
              "file_data": {
                "resolutions": {
                  "width": 466,
                  "height": 350
                }
              }
            }
          },
          {
            "id": "106",
            "name": "Mae Hong Son",
            "thumb_image": {
              "id": "1952",
              "title": "1fdd65db8cfa80cd2c3525e7eb92f897.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1-1952.png",
              "file_type": "image/png",
              "file_size": "369258",
              "file_data": {
                "resolutions": {
                  "width": 466,
                  "height": 350
                }
              }
            }
          },
          {
            "id": "104",
            "name": "Lampang",
            "thumb_image": {
              "id": "1950",
              "title": "ccf6319233d4e8c9012d74f2d41386e3.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1-1950.png",
              "file_type": "image/png",
              "file_size": "384341",
              "file_data": {
                "resolutions": {
                  "width": 466,
                  "height": 350
                }
              }
            }
          },
          {
            "id": "114",
            "name": "Sukhothai",
            "thumb_image": {
              "id": "7860",
              "title": "166a875bdbcfd745870ab016bda3207a.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1-7860.png",
              "file_type": "image/png",
              "file_size": "512827",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          }
        ]
      },
      {
        "id": "2",
        "name": "Central",
        "short_description": "Central Thailand is mainly plains and is a huge area of rice farming and agriculture. The Chao Phraya River is very important to Thailand’s history. Interesting places to visit are ancient historical temples, Bang Pa-in Royal Palace and Bang Sai Royal Fol",
        "thumb_image": {
          "id": "783",
          "title": "f33c65a622e7f97ca4edbf4758f6126b.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/region/1-783.png",
          "file_type": "image/png",
          "file_size": "133244",
          "file_data": {
            "resolutions": {
              "width": 273,
              "height": 205
            }
          }
        },
        "top_destination": [
          {
            "id": "219",
            "name": "Bangkok",
            "thumb_image": {
              "id": "9070",
              "title": "84b844652018ca7ea23e3a8007c5fe74.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1124-9070.png",
              "file_type": "image/png",
              "file_size": "556775",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "221",
            "name": "Chainat",
            "thumb_image": {
              "id": "7866",
              "title": "f7cae40981a754a4ba3e499a0c5d1d40.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1-7866.png",
              "file_type": "image/png",
              "file_size": "381229",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "238",
            "name": "Sing Buri",
            "thumb_image": {
              "id": "9026",
              "title": "544ee1a698cfd35b0cda01da8081467c.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9026.png",
              "file_type": "image/png",
              "file_size": "514579",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "229",
            "name": "Phra Nakhon Si Ayutthaya",
            "thumb_image": {
              "id": "9017",
              "title": "f06169fe188601ec947d9598322364e1.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9017.png",
              "file_type": "image/png",
              "file_size": "471453",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "223",
            "name": "Lop Buri",
            "thumb_image": {
              "id": "7868",
              "title": "3ca0ff84924e93d10038ae903d4f6265.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1-7868.png",
              "file_type": "image/png",
              "file_size": "367159",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          }
        ]
      },
      {
        "id": "3",
        "name": "South",
        "short_description": "The South contains many beautiful beaches and islands in the Gulf of Thailand and the Andaman Sea. Well-known tourist destinations are Phuket Province, Ko Samui, Ko Phi Phi, Ko Lipe, and Ko Tao.",
        "thumb_image": {
          "id": "861",
          "title": "7053e7bf5b6ec1a0f0e78513db650663.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/region/1-861.png",
          "file_type": "image/png",
          "file_size": "133601",
          "file_data": {
            "resolutions": {
              "width": 273,
              "height": 205
            }
          }
        },
        "top_destination": [
          {
            "id": "360",
            "name": "Ko Samui",
            "thumb_image": {
              "id": "9046",
              "title": "4a486a9e43d7c62587cbc36f52ff64cd.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9046.png",
              "file_type": "image/png",
              "file_size": "441458",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "344",
            "name": "Krabi",
            "thumb_image": {
              "id": "7870",
              "title": "264b04117f783b85262ba64eac24a799.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1-7870.png",
              "file_type": "image/png",
              "file_size": "336345",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "350",
            "name": "Phuket",
            "thumb_image": {
              "id": "9068",
              "title": "a97036fe567fe18e9fc79ef372d723f0.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1124-9068.png",
              "file_type": "image/png",
              "file_size": "483185",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "353",
            "name": "Songkhla",
            "thumb_image": {
              "id": "9035",
              "title": "28ac6892eec0459b4d4d3494a51db091.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9035.png",
              "file_type": "image/png",
              "file_size": "390094",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "354",
            "name": "Surat Thani",
            "thumb_image": {
              "id": "9036",
              "title": "37b0c6a62f6a07736b2076bced5eaeb5.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9036.png",
              "file_type": "image/png",
              "file_size": "449923",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          }
        ]
      },
      {
        "id": "4",
        "name": "East",
        "short_description": "Eastern Thailand is half mountain, half ocean. Although there aren’t many provinces here, it still has a lot of amazing sights and stunning locations to visit just like the rest of Thailand such as Ko Samed, Ko Chang, Ko Mak, Ko Lan, Ko Si Chang, Ban",
        "thumb_image": {
          "id": "859",
          "title": "0b2829a2f0b7f640590aeedfd8dc4baa.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/region/1-859.png",
          "file_type": "image/png",
          "file_size": "132076",
          "file_data": {
            "resolutions": {
              "width": 273,
              "height": 205
            }
          }
        },
        "top_destination": [
          {
            "id": "220",
            "name": "Chachoengsao",
            "thumb_image": {
              "id": "7865",
              "title": "678806b4525ed8c8691cb4ef233a6329.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1-7865.png",
              "file_type": "image/png",
              "file_size": "324328",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "464",
            "name": "Chon Buri",
            "thumb_image": {
              "id": "9071",
              "title": "cdafaccf822b02a5ab42f2b91fa1743b.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1124-9071.png",
              "file_type": "image/png",
              "file_size": "492794",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "467",
            "name": "Ko Chang",
            "thumb_image": {
              "id": "9052",
              "title": "ed42c5d6eac29be4dceeed5a174bb30d.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9052.png",
              "file_type": "image/png",
              "file_size": "443548",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "469",
            "name": "Pattaya",
            "thumb_image": {
              "id": "9055",
              "title": "a42b51f9f3fd3c5c82b30c04bbc29e5d.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9055.png",
              "file_type": "image/png",
              "file_size": "449862",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "465",
            "name": "Rayong",
            "thumb_image": {
              "id": "9050",
              "title": "d396696f73a37e2e6395a7e993c2b040.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9050.png",
              "file_type": "image/png",
              "file_size": "450603",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          }
        ]
      },
      {
        "id": "5",
        "name": "North East",
        "short_description": "The Northeast features some of the beautiful northern highlands and also gorgeous plateaus. Hom Mali Rice (Thai Jasmine Rice) is grown here and exported all over the world. The Mekong River is a very prominent river that runs through the area. Popular pla",
        "thumb_image": {
          "id": "940",
          "title": "4abea28caabeac2754315ac4af4808ad.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/region/1-940.png",
          "file_type": "image/png",
          "file_size": "134225",
          "file_data": {
            "resolutions": {
              "width": 273,
              "height": 205
            }
          }
        },
        "top_destination": [
          {
            "id": "572",
            "name": "Buri Ram",
            "thumb_image": {
              "id": "9059",
              "title": "c0d0ad4624b5ec6509901cdf60c3cc94.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9059.png",
              "file_type": "image/png",
              "file_size": "482798",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "575",
            "name": "Khon Kaen",
            "thumb_image": {
              "id": "9062",
              "title": "b1d10bb3e4ced01036b04986b8f325fb.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9062.png",
              "file_type": "image/png",
              "file_size": "475773",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "580",
            "name": "Nakhon Ratchasima",
            "thumb_image": {
              "id": "9073",
              "title": "1d92a03b0216275e51de51c9005c12fe.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9073.png",
              "file_type": "image/png",
              "file_size": "445996",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "582",
            "name": "Nong Khai",
            "thumb_image": {
              "id": "9075",
              "title": "033eb508cb864b9a2f277c95e4bf21d1.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9075.png",
              "file_type": "image/png",
              "file_size": "271520",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "587",
            "name": "Ubon Ratchathani",
            "thumb_image": {
              "id": "9082",
              "title": "fa419c2a9cd83029514010755aba6b6c.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9082.png",
              "file_type": "image/png",
              "file_size": "374762",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          }
        ]
      },
      {
        "id": "6",
        "name": "West",
        "short_description": "West Thailand features a distinctive landscape of rugged mountains, lush forests, and beautiful waterfalls. It also offers historical landmarks like the famous River Kwai Bridge, ancient temples, and intriguing cultural heritage sites, making it a diverse and captivating travel destination.",
        "thumb_image": {

        },
        "top_destination": [
          {
            "id": "115",
            "name": "Tak",
            "thumb_image": {
              "id": "7861",
              "title": "9fe84b326d64fde8a3bcfba809f664bc.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1-7861.png",
              "file_type": "image/png",
              "file_size": "465043",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "222",
            "name": "Kanchanaburi",
            "thumb_image": {
              "id": "7867",
              "title": "c7f47c049a22928c31a1a66a2a6fca00.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/1-7867.png",
              "file_type": "image/png",
              "file_size": "493290",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "232",
            "name": "Ratchaburi",
            "thumb_image": {
              "id": "9020",
              "title": "76408acb6f39a0e1b135579460be77ae.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9020.png",
              "file_type": "image/png",
              "file_size": "359481",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "228",
            "name": "Phetchaburi",
            "thumb_image": {
              "id": "9016",
              "title": "c7f63e5a575a0e9b70fb4bdd4820fb1b.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9016.png",
              "file_type": "image/png",
              "file_size": "514880",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          },
          {
            "id": "231",
            "name": "Prachuap Khiri Khan",
            "thumb_image": {
              "id": "9019",
              "title": "d1c8b0789aaa4a62d69934bd4343be70.png",
              "description": "",
              "url": "https://api.tourismthailand.org/upload/live/destination/4-9019.png",
              "file_type": "image/png",
              "file_size": "479411",
              "file_data": {
                "resolutions": {
                  "width": 542,
                  "height": 407
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```

https://api.tourismthailand.org/api/experience/get_menu_list?Language=en&timestamp=1747932000600
```json

```

https://api.tourismthailand.org/api/pdpa/cookie/config
```json

```

https://api.tourismthailand.org/api/destination/get_region_detail?Language=en&timestamp=1747932503141&region_id=2
```json

```

https://api.tourismthailand.org/api/article/get_detail?Language=en&timestamp=1747932546388&slug=kaws-holiday-thailanden
```json

```

https://api.tourismthailand.org/api/destination/get_filter_list?Language=en&timestamp=1747932552660

```json

```

https://api.tourismthailand.org/api/destination/get_inspiration?Language=en&timestamp=1747932552660
```json

```

https://api.tourismthailand.org/api/experience/get_sub_category?Language=en&timestamp=1747932635968&sub_category_id=25
```json

```


https://api.tourismthailand.org/api/destination/get_detail?Language=en&timestamp=1747932649412&destination_id=219
```json

```
https://api.tourismthailand.org/api/article/get_detail?Language=en&timestamp=1747932663920&slug=thailand-february
```json

```

https://api.tourismthailand.org/api/promotion/get_list?Language=en&timestamp=1747932695758&perpage=12
```json

```
https://api.tourismthailand.org/api/destination/get_region_detail?Language=en&timestamp=1747932722302&region_id=1
```json

```

https://api.tourismthailand.org/api/article/get_detail?Language=en&timestamp=1747932733053&slug=plan-your-trip-passportandvisa
```json

```

https://api.tourismthailand.org/api/article/get_detail?Language=en&timestamp=1747932744875&slug=plan-your-trip-customs-and-immigration
```json

```
https://api.tourismthailand.org/api/article/get_detail?Language=en&timestamp=1747932756282&slug=plan-your-trip-around-cities
```json

```


```json

```

```json

```

## Detail API Endpoint

https://api.tourismthailand.org/api/destination/get_detail?Language=en&timestamp=1747931694298&destination_id=219

```json
{
  "response_code": 200,
  "response_msg": "Success",
  "result": {
    "title": "Bangkok",
    "description": "\u003Cp\u003EAn increasing of tourists visiting Bangkok each year has proven that Bangkok is always a popular city for tourists.\u003C/p\u003E\u003Cp\u003EFor major tourist attractions in Bangkok, most of them are historical sites or religious sites such as temples in Bangkok. There is beautiful architecture, wall painting and also important in history, such as Wat Phra Sri Rattanasamaram (Phra Kaew), Wat Phra Chetuphon Wimon Mangalaram (Wat Pho), Wat Arun Ratchawararam, Wat Sra Ket, and Phra Bor Banphot (Golden Mountain), Wat Ratchanadda, Wat Traimit, Wat Benchamabophit, Wat Bowonniwet Vihara Suthasan, Wat Thep Wararam etc.&nbsp;\u003Cbr\u003E\u003Cbr\u003EThere are also other interesting places such as palaces, museums, parks, as well as various shopping centres in Bangkok. There are both chilling places like Chatuchak Weekend Market, Sampeng Market, Yaowarat and Phahurat Night Market or luxury level such as many leading department stores in all areas of Bangkok as well.\u003C/p\u003E",
    "latitude": "13.74983106",
    "longitude": "100.4912889",
    "banner_image": {
      "title": "Bangkok",
      "description": "",
      "desktop_url": "https://api.tourismthailand.org/asset/destination/banner/desktop/219.jpg",
      "mobile_url": "https://api.tourismthailand.org/asset/destination/banner/mobile/219.jpg"
    },
    "tagwords": [
      {
        "id": "1",
        "name": "ExploreThailand"
      },
      {
        "id": "3",
        "name": "Temple"
      },
      {
        "id": "5",
        "name": "thaifood"
      },
      {
        "id": "16",
        "name": "luxury hotel"
      },
      {
        "id": "31",
        "name": "province"
      },
      {
        "id": "32",
        "name": "Phra Nakhon Si Ayutthaya"
      },
      {
        "id": "33",
        "name": "Bang Pa-In"
      },
      {
        "id": "34",
        "name": "Wat Niwet Thamprawat Ratchaworawihan"
      },
      {
        "id": "37",
        "name": "Bangkok"
      },
      {
        "id": "38",
        "name": "Pathum wan"
      },
      {
        "id": "39",
        "name": "Bangkok Art And Culture Centre"
      },
      {
        "id": "40",
        "name": "ArtGalleries.OpenToTheNewShades"
      },
      {
        "id": "41",
        "name": "shorttrip"
      },
      {
        "id": "42",
        "name": "PhraNakhon"
      },
      {
        "id": "43",
        "name": "GiantSwing"
      },
      {
        "id": "44",
        "name": "Memorials"
      },
      {
        "id": "45",
        "name": "StunningView"
      },
      {
        "id": "46",
        "name": "Chonburi"
      },
      {
        "id": "47",
        "name": "Bang Lamung"
      },
      {
        "id": "48",
        "name": "Sanctuary of Truth"
      },
      {
        "id": "49",
        "name": "museum"
      },
      {
        "id": "50",
        "name": "Phra Nakron"
      },
      {
        "id": "51",
        "name": "Temple of the Emerald Buddha"
      },
      {
        "id": "52",
        "name": "Wat Phra Kaew"
      },
      {
        "id": "53",
        "name": "Phra Nakhon"
      },
      {
        "id": "54",
        "name": "Museum of Siam"
      },
      {
        "id": "55",
        "name": "Museum for learning"
      },
      {
        "id": "56",
        "name": "Arts and Culture Center"
      },
      {
        "id": "57",
        "name": "ThailandTourismAwards"
      },
      {
        "id": "58",
        "name": "Prachuap Khiri Khan"
      },
      {
        "id": "59",
        "name": "Hua Hin"
      },
      {
        "id": "60",
        "name": "Raruk Hua Hin"
      },
      {
        "id": "61",
        "name": "Tourist Attraction"
      },
      {
        "id": "62",
        "name": "Sattahip"
      },
      {
        "id": "63",
        "name": "Samae San Island"
      },
      {
        "id": "64",
        "name": "Beach"
      },
      {
        "id": "65",
        "name": "Ecotourism"
      },
      {
        "id": "66",
        "name": "Pattaya Floating Market"
      },
      {
        "id": "67",
        "name": "Tourism Attraction"
      },
      {
        "id": "68",
        "name": "Floating Market"
      },
      {
        "id": "69",
        "name": "Monsoon Valley"
      },
      {
        "id": "70",
        "name": "Hua Hin Hill Vineyard"
      },
      {
        "id": "71",
        "name": "GreenTravel"
      },
      {
        "id": "72",
        "name": "BeautifulPlace"
      },
      {
        "id": "73",
        "name": "BeautifulDestination"
      },
      {
        "id": "74",
        "name": "Nakhon Ratchasima"
      },
      {
        "id": "75",
        "name": "Pak Thong Chai"
      },
      {
        "id": "76",
        "name": "Jim Thompson Farm"
      },
      {
        "id": "77",
        "name": "Flowerfield"
      },
      {
        "id": "78",
        "name": "Landmark"
      },
      {
        "id": "79",
        "name": "Farm"
      },
      {
        "id": "80",
        "name": "amazingไทยเท่ห์"
      },
      {
        "id": "81",
        "name": "RoadTrip"
      },
      {
        "id": "82",
        "name": "Rattanakosin Exhibition Hall"
      },
      {
        "id": "83",
        "name": "OpenToTheNewShades"
      },
      {
        "id": "84",
        "name": "4D Miniature Thai Royal Barge Performance Center"
      },
      {
        "id": "85",
        "name": "Art and Performance"
      },
      {
        "id": "86",
        "name": "Ratchathewi"
      },
      {
        "id": "87",
        "name": "Phayathai Palace"
      },
      {
        "id": "88",
        "name": "Palace"
      },
      {
        "id": "89",
        "name": "Museum for Education"
      },
      {
        "id": "90",
        "name": "Wat Yai Chai Mongkhon"
      },
      {
        "id": "91",
        "name": "Archeological Site"
      },
      {
        "id": "92",
        "name": "History"
      },
      {
        "id": "93",
        "name": "Wat Sena Sanaram"
      },
      {
        "id": "94",
        "name": "Wat Chaiwatthanaram"
      },
      {
        "id": "95",
        "name": "Wat Phananchoeng"
      },
      {
        "id": "96",
        "name": "Khun Phaen Residence"
      },
      {
        "id": "97",
        "name": "ancient house"
      },
      {
        "id": "98",
        "name": "Japanese Village"
      },
      {
        "id": "100",
        "name": "Statue of Somdet Phra Ramathibodi I (Phrachao U-Thong)"
      },
      {
        "id": "101",
        "name": "Thailand"
      },
      {
        "id": "102",
        "name": "Elephant Kraal Pavilion"
      },
      {
        "id": "103",
        "name": "Historical attractions and monuments"
      },
      {
        "id": "104",
        "name": "Portuguese Village"
      },
      {
        "id": "105",
        "name": "Archaeological Site"
      },
      {
        "id": "106",
        "name": "Nakhon Luang"
      },
      {
        "id": "107",
        "name": "Prasart Nakhon Luang"
      },
      {
        "id": "108",
        "name": "King Naresuan The Great Monument"
      },
      {
        "id": "109",
        "name": "Ancient Palace"
      },
      {
        "id": "110",
        "name": "Archaeological"
      },
      {
        "id": "111",
        "name": "HistrorialSite"
      },
      {
        "id": "112",
        "name": "RoyalPalace"
      },
      {
        "id": "113",
        "name": "Histrorical"
      },
      {
        "id": "114",
        "name": "Mu Si"
      },
      {
        "id": "115",
        "name": "Haew Su Wat Waterfall"
      },
      {
        "id": "116",
        "name": "Phra Maha Vajira Uttamo Bhat Satsada Place"
      },
      {
        "id": "117",
        "name": "Khao Chi Chan Buddha Image"
      },
      {
        "id": "118",
        "name": "Bang Pa-In Palace"
      },
      {
        "id": "119",
        "name": "Nai Mueang"
      },
      {
        "id": "120",
        "name": "Thao Suranari Memorial"
      },
      {
        "id": "121",
        "name": "ArtandCraft"
      },
      {
        "id": "122",
        "name": "Khao Krailat"
      },
      {
        "id": "123",
        "name": "Hua Hin Beach"
      },
      {
        "id": "124",
        "name": "Khao Takiap"
      },
      {
        "id": "125",
        "name": "mountain"
      },
      {
        "id": "126",
        "name": "Ratchani Thai Silk"
      },
      {
        "id": "127",
        "name": "Mueang Chon Buri"
      },
      {
        "id": "128",
        "name": "Nong Mon Market"
      },
      {
        "id": "129",
        "name": "Local Market"
      },
      {
        "id": "130",
        "name": "Phetchaburi"
      },
      {
        "id": "131",
        "name": "Cha-Am"
      },
      {
        "id": "132",
        "name": "Cha-Am Beach"
      },
      {
        "id": "133",
        "name": "Wat Mahathat"
      },
      {
        "id": "134",
        "name": "Archaeological sites"
      },
      {
        "id": "135",
        "name": "Mini Siam"
      },
      {
        "id": "136",
        "name": "Mrigadayavan Palace"
      },
      {
        "id": "137",
        "name": "Phaya Yen"
      },
      {
        "id": "138",
        "name": "GranMonte Vineyard and Winery"
      },
      {
        "id": "139",
        "name": "EducationGarden"
      },
      {
        "id": "140",
        "name": "Adventure"
      },
      {
        "id": "141",
        "name": "Phimai Historical Park"
      },
      {
        "id": "142",
        "name": "CulturalShow"
      },
      {
        "id": "143",
        "name": "Plearnwan"
      },
      {
        "id": "144",
        "name": "Wat Phra Sri Sanphet"
      },
      {
        "id": "145",
        "name": "Khanong Phra"
      },
      {
        "id": "146",
        "name": "Bonanza Adventure Park"
      },
      {
        "id": "147",
        "name": "AmusementPark"
      },
      {
        "id": "148",
        "name": "Nature Addict"
      },
      {
        "id": "149",
        "name": "Phra Mongkhon Bophit Temple"
      },
      {
        "id": "150",
        "name": "ReligiousSite"
      },
      {
        "id": "151",
        "name": "Nong Nam Daeng"
      },
      {
        "id": "152",
        "name": "Kaeo Saraphatnuek Cave"
      },
      {
        "id": "153",
        "name": "Art In Paradise"
      },
      {
        "id": "154",
        "name": "Black Mountain Water Park"
      },
      {
        "id": "155",
        "name": "Water Park"
      },
      {
        "id": "156",
        "name": "Pattaya Viewpoint on Pratumnak Hill"
      },
      {
        "id": "157",
        "name": "Ratchaphakdi Park"
      },
      {
        "id": "158",
        "name": "Sanam Luang"
      },
      {
        "id": "160",
        "name": "The National Gallery"
      },
      {
        "id": "161",
        "name": "Art Gallery"
      },
      {
        "id": "162",
        "name": "National Museum Bangkok"
      },
      {
        "id": "163",
        "name": "Bangkok Noi"
      },
      {
        "id": "164",
        "name": "National Museum of Royal Barge"
      },
      {
        "id": "165",
        "name": "Boat"
      },
      {
        "id": "166",
        "name": "Bangkok Yai"
      },
      {
        "id": "167",
        "name": "Wat Arun Ratchawararam Ratchawora Mahawihan"
      },
      {
        "id": "168",
        "name": "Dusit"
      },
      {
        "id": "169",
        "name": "Wat Benchamabophit Dusitvanaram Rajawarawiharn"
      },
      {
        "id": "170",
        "name": "Chapel"
      },
      {
        "id": "171",
        "name": "Victory Monument"
      },
      {
        "id": "173",
        "name": "Farm ChokChai"
      },
      {
        "id": "174",
        "name": "Zoo"
      },
      {
        "id": "175",
        "name": "Cafe"
      },
      {
        "id": "176",
        "name": "Jomtien Beach"
      },
      {
        "id": "177",
        "name": "Pattaya Elephant Village"
      },
      {
        "id": "178",
        "name": "PhraNakron"
      },
      {
        "id": "179",
        "name": "DemocracyMonument"
      },
      {
        "id": "180",
        "name": "WatPhraChetuphon WimonmongkhlararamRatchawara Mahawihan"
      },
      {
        "id": "181",
        "name": "WatPho"
      },
      {
        "id": "182",
        "name": "Wat Suthat Thepwararam"
      },
      {
        "id": "183",
        "name": "Chill Out"
      },
      {
        "id": "184",
        "name": "Pubs and bars"
      },
      {
        "id": "185",
        "name": "The National Theater"
      },
      {
        "id": "186",
        "name": "Performing Arts and Culture"
      },
      {
        "id": "187",
        "name": "Theater"
      },
      {
        "id": "188",
        "name": "Cultural Performance"
      },
      {
        "id": "189",
        "name": "KhlongToei"
      },
      {
        "id": "190",
        "name": "BenjasiriNationalPark"
      },
      {
        "id": "191",
        "name": "Ayutthaya Elephant Palace & Royal Kraal"
      },
      {
        "id": "192",
        "name": "Ride an elephant"
      },
      {
        "id": "193",
        "name": "Bang Pa In"
      },
      {
        "id": "194",
        "name": "Mon Museum"
      },
      {
        "id": "195",
        "name": "Sunflower field \"Rai Manee Sorn\""
      },
      {
        "id": "196",
        "name": "Souvenir"
      },
      {
        "id": "197",
        "name": "Klang Dong"
      },
      {
        "id": "198",
        "name": "Suwan Farm’s Sweet Corn"
      },
      {
        "id": "199",
        "name": "FoodAndBeverage"
      },
      {
        "id": "200",
        "name": "OTOP"
      },
      {
        "id": "201",
        "name": "Hua Hin Railway Station"
      },
      {
        "id": "203",
        "name": "History and architecture"
      },
      {
        "id": "204",
        "name": "Sai Sorn Reservoir"
      },
      {
        "id": "205",
        "name": "Dam"
      },
      {
        "id": "206",
        "name": "Reservoir"
      },
      {
        "id": "207",
        "name": "Wang Kakhon"
      },
      {
        "id": "208",
        "name": "The Blessed Nicholas Bunkerd Kitbamrung Church Khao Yai"
      },
      {
        "id": "209",
        "name": "church"
      },
      {
        "id": "210",
        "name": "Tradition Candle procession Korat"
      },
      {
        "id": "211",
        "name": "StreetFood"
      },
      {
        "id": "212",
        "name": "Custard Apple"
      },
      {
        "id": "213",
        "name": "Good Chong Pak and Red Cross Fair"
      },
      {
        "id": "214",
        "name": "OutdoorActivity"
      },
      {
        "id": "215",
        "name": "ConcertVenue"
      },
      {
        "id": "216",
        "name": "LocalMarket"
      },
      {
        "id": "217",
        "name": "Organic"
      },
      {
        "id": "218",
        "name": "ThaiFood"
      },
      {
        "id": "219",
        "name": "FastFood"
      },
      {
        "id": "220",
        "name": "Concert"
      },
      {
        "id": "221",
        "name": "Baan Hollanda"
      },
      {
        "id": "222",
        "name": "EducationMusuem"
      },
      {
        "id": "223",
        "name": "Musuem"
      },
      {
        "id": "224",
        "name": "Hua Hin Artist Village"
      },
      {
        "id": "225",
        "name": "Mueang Prachuap Khiri Khan"
      },
      {
        "id": "226",
        "name": "Prachuap Khiri Khan City Pillar Shrine"
      },
      {
        "id": "227",
        "name": "Samphanthawong"
      },
      {
        "id": "228",
        "name": "Yaowarat"
      },
      {
        "id": "229",
        "name": "NightMarket"
      },
      {
        "id": "230",
        "name": "Chon Buri"
      },
      {
        "id": "231",
        "name": "Wonderfruit Festival 2019"
      },
      {
        "id": "232",
        "name": "Featival"
      },
      {
        "id": "233",
        "name": "Thonburi"
      },
      {
        "id": "234",
        "name": "KudiChinCommunity"
      },
      {
        "id": "235",
        "name": "HistroricalHouse"
      },
      {
        "id": "236",
        "name": "Phak Hai"
      },
      {
        "id": "237",
        "name": "Lad Chado Market"
      },
      {
        "id": "238",
        "name": "SalaChalermkrungTheatre"
      },
      {
        "id": "239",
        "name": "PhasiCharoen"
      },
      {
        "id": "240",
        "name": "KlongBangLuang CommunityandKlongBangLuangArtistHouseArtGallery"
      },
      {
        "id": "241",
        "name": "LocalLifestyle"
      },
      {
        "id": "242",
        "name": "City Wall and Fortresse"
      },
      {
        "id": "243",
        "name": "KlongToei"
      },
      {
        "id": "244",
        "name": "FlowHouseBangkok"
      },
      {
        "id": "245",
        "name": "Lent Candle Festival"
      },
      {
        "id": "246",
        "name": "BangKhoLaem"
      },
      {
        "id": "247",
        "name": "CALYPSOCABARET"
      },
      {
        "id": "248",
        "name": "Musical"
      },
      {
        "id": "249",
        "name": "PathumWan"
      },
      {
        "id": "250",
        "name": "SeaLifeBangkokOceanWorld"
      },
      {
        "id": "251",
        "name": "Aquarium"
      },
      {
        "id": "252",
        "name": "Visit the archaeological site by cycling"
      },
      {
        "id": "253",
        "name": "Cycling"
      },
      {
        "id": "254",
        "name": "Boat trip"
      },
      {
        "id": "255",
        "name": "River"
      },
      {
        "id": "256",
        "name": "Cruising"
      },
      {
        "id": "258",
        "name": "Mueang Nan"
      },
      {
        "id": "259",
        "name": "Take a tricycle - tram to see the city of Nan"
      },
      {
        "id": "260",
        "name": "Phuket"
      },
      {
        "id": "261",
        "name": "Mueang Phuket"
      },
      {
        "id": "262",
        "name": "Laem Phromthep"
      },
      {
        "id": "263",
        "name": "Wat Phra That Chae Haeng"
      },
      {
        "id": "264",
        "name": "National Museum Of Nan"
      },
      {
        "id": "265",
        "name": "Wat Phumin"
      },
      {
        "id": "266",
        "name": "Kathu"
      },
      {
        "id": "267",
        "name": "Phuket Fantasea"
      },
      {
        "id": "268",
        "name": "Culture"
      },
      {
        "id": "269",
        "name": "Performance"
      },
      {
        "id": "270",
        "name": "Chiang Mai"
      },
      {
        "id": "271",
        "name": "Chom Thong"
      },
      {
        "id": "272",
        "name": "Kio Mae Pan Nature Trail"
      },
      {
        "id": "273",
        "name": "Trekking"
      },
      {
        "id": "274",
        "name": "mountainsarecalling"
      },
      {
        "id": "275",
        "name": "Mueang Chiang Mai"
      },
      {
        "id": "276",
        "name": "Wat Phrathat Doi Kham"
      },
      {
        "id": "277",
        "name": "Kad Dhara Shopping Village"
      },
      {
        "id": "278",
        "name": "Fang"
      },
      {
        "id": "279",
        "name": "The Royal Agricultural Station Angkhang"
      },
      {
        "id": "280",
        "name": "Garden"
      },
      {
        "id": "281",
        "name": "FlowerAndPlant"
      },
      {
        "id": "282",
        "name": "Wat Phra That Khao Noi"
      },
      {
        "id": "283",
        "name": "Na Noi"
      },
      {
        "id": "284",
        "name": "Sri Nan National Park"
      },
      {
        "id": "285",
        "name": "ChiangRai"
      },
      {
        "id": "286",
        "name": "MueangChiangRai"
      },
      {
        "id": "287",
        "name": "HilltribeMuseum&EducationCenter"
      },
      {
        "id": "288",
        "name": "MaeFaLuang"
      },
      {
        "id": "289",
        "name": "DoiTungRoyalVillaAndMaeFaLuangGarden"
      },
      {
        "id": "290",
        "name": "Chaing Mai"
      },
      {
        "id": "291",
        "name": "The Lanna Traditional House Museum"
      },
      {
        "id": "292",
        "name": "Art in Paradise Chiang Mai"
      },
      {
        "id": "293",
        "name": "ArtGalleries"
      },
      {
        "id": "294",
        "name": "Wat Prasat"
      },
      {
        "id": "295",
        "name": "Wat Chedi Luang Worawihan"
      },
      {
        "id": "296",
        "name": "Wat Bupparam"
      },
      {
        "id": "297",
        "name": "Wat Ched Yod"
      },
      {
        "id": "298",
        "name": "HistoricalSite"
      },
      {
        "id": "299",
        "name": "KuPhraChaoMengRai"
      },
      {
        "id": "300",
        "name": "Bhubing Palace"
      },
      {
        "id": "301",
        "name": "Chino-Portugal Architecture Building"
      },
      {
        "id": "302",
        "name": "Old Phuket Town"
      },
      {
        "id": "303",
        "name": "Old Town Phuket"
      },
      {
        "id": "304",
        "name": "Wat Phrathat Doi Suthep Ratchaworawihan"
      },
      {
        "id": "305",
        "name": "Khum Chaoratchabut"
      },
      {
        "id": "306",
        "name": "Phuket Thai Hua Museum"
      },
      {
        "id": "307",
        "name": "OubKhamMuseum"
      },
      {
        "id": "308",
        "name": "WatPhrathatDoiChomThong"
      },
      {
        "id": "309",
        "name": "Wat Ming Mueang"
      },
      {
        "id": "310",
        "name": "WatRongKhun"
      },
      {
        "id": "311",
        "name": "Karon Beach"
      },
      {
        "id": "313",
        "name": "RaiMaeFaLuang"
      },
      {
        "id": "314",
        "name": "Tha Phae Gate"
      },
      {
        "id": "315",
        "name": "Thalang"
      },
      {
        "id": "316",
        "name": "Surin Beach"
      },
      {
        "id": "317",
        "name": "Thoeng"
      },
      {
        "id": "318",
        "name": "PhuChiFaForestPark"
      },
      {
        "id": "319",
        "name": "Doi Inthanon National Park"
      },
      {
        "id": "320",
        "name": "NationalPark"
      },
      {
        "id": "321",
        "name": "BaandamMuseum"
      },
      {
        "id": "322",
        "name": "MaeKon"
      },
      {
        "id": "323",
        "name": "SinghaPark"
      },
      {
        "id": "324",
        "name": "NatureSite"
      },
      {
        "id": "325",
        "name": "MeaSai"
      },
      {
        "id": "326",
        "name": "BaanPhahi"
      },
      {
        "id": "327",
        "name": "Village"
      },
      {
        "id": "328",
        "name": "MaeSai"
      },
      {
        "id": "329",
        "name": "DoiPhaMee"
      },
      {
        "id": "330",
        "name": "NakhonRatchasima"
      },
      {
        "id": "331",
        "name": "PakChong"
      },
      {
        "id": "332",
        "name": "PrimoPiazza"
      },
      {
        "id": "333",
        "name": "Ban Nor Lae Strawberry Farm"
      },
      {
        "id": "334",
        "name": "Hilltribe"
      },
      {
        "id": "335",
        "name": "BaanMaeSatCommunity"
      },
      {
        "id": "336",
        "name": "DoiPangKhon"
      },
      {
        "id": "337",
        "name": "HuayKeawWaterfallDoiHang"
      },
      {
        "id": "338",
        "name": "waterfalls"
      },
      {
        "id": "339",
        "name": "WatRongSeurTen"
      },
      {
        "id": "340",
        "name": "Chiang Rai"
      },
      {
        "id": "341",
        "name": "Mae Chan"
      },
      {
        "id": "342",
        "name": "Choui Fong Tea Plantation"
      },
      {
        "id": "343",
        "name": "Wat Phuket"
      },
      {
        "id": "344",
        "name": "Wat Sri Panthon"
      },
      {
        "id": "345",
        "name": "Bo Kluea"
      },
      {
        "id": "346",
        "name": "Ban Bo Luang"
      },
      {
        "id": "347",
        "name": "Bo Kluea District"
      },
      {
        "id": "348",
        "name": "The Noble House"
      },
      {
        "id": "349",
        "name": "Chaloem Phra Kiat"
      },
      {
        "id": "350",
        "name": "Highland Agricultural Development Station"
      },
      {
        "id": "351",
        "name": "Ban Sa Chuuk - Sa Kiang"
      },
      {
        "id": "352",
        "name": "Pak Chong"
      },
      {
        "id": "353",
        "name": "Thongsomboon Club"
      },
      {
        "id": "354",
        "name": "Khon House"
      },
      {
        "id": "355",
        "name": "Mae Charim"
      },
      {
        "id": "356",
        "name": "Nam Wa Rafting"
      },
      {
        "id": "357",
        "name": "Rafting"
      },
      {
        "id": "358",
        "name": "KokRiverCruiseThaton-ChiangRai"
      },
      {
        "id": "359",
        "name": "ElephantRiding"
      },
      {
        "id": "360",
        "name": "NatureAddict"
      },
      {
        "id": "361",
        "name": "Wineries"
      },
      {
        "id": "362",
        "name": "Phetchabun"
      },
      {
        "id": "363",
        "name": "Nam Nao"
      },
      {
        "id": "364",
        "name": "Phu Kho Sunrise View Point"
      },
      {
        "id": "365",
        "name": "national park"
      },
      {
        "id": "366",
        "name": "Lom Kao"
      },
      {
        "id": "367",
        "name": "Phu Tubberk"
      },
      {
        "id": "368",
        "name": "Udon Thani"
      },
      {
        "id": "369",
        "name": "Mueang Udon Thani"
      },
      {
        "id": "370",
        "name": "Nong Prachak Public Park"
      },
      {
        "id": "371",
        "name": "Public park"
      },
      {
        "id": "372",
        "name": "Sukhothai"
      },
      {
        "id": "373",
        "name": "SiSatchanalai"
      },
      {
        "id": "374",
        "name": "SiSatchanalaiHistoricalPark"
      },
      {
        "id": "375",
        "name": "Kanchanaburi"
      },
      {
        "id": "376",
        "name": "MueangKanchanaburi"
      },
      {
        "id": "377",
        "name": "RiverKwaiBridge"
      },
      {
        "id": "378",
        "name": "BaanKaoNationalMuseum"
      },
      {
        "id": "379",
        "name": "bestdiscovery"
      },
      {
        "id": "380",
        "name": "Krabi"
      },
      {
        "id": "381",
        "name": "AoLuek"
      },
      {
        "id": "382",
        "name": "KhlangCave"
      },
      {
        "id": "383",
        "name": "Cave"
      },
      {
        "id": "384",
        "name": "amazingไทยเท่"
      },
      {
        "id": "385",
        "name": "KhlongThom"
      },
      {
        "id": "386",
        "name": "EmeraldPool"
      },
      {
        "id": "387",
        "name": "Khao Kho"
      },
      {
        "id": "388",
        "name": "Khao Kho Royal Palace"
      },
      {
        "id": "389",
        "name": "SiSawat"
      },
      {
        "id": "390",
        "name": "ErawanNationalPark"
      },
      {
        "id": "391",
        "name": "KanchanaburiCulturalCenter"
      },
      {
        "id": "392",
        "name": "Wat Phra Thad Pha Son Kaew"
      },
      {
        "id": "393",
        "name": "Buri Ram"
      },
      {
        "id": "394",
        "name": "Mueang Buri Ram"
      },
      {
        "id": "395",
        "name": "Chang Arena Stadium"
      },
      {
        "id": "396",
        "name": "SportVenue"
      },
      {
        "id": "397",
        "name": "King Rama I Momument"
      },
      {
        "id": "398",
        "name": "KhonKaen"
      },
      {
        "id": "399",
        "name": "MueangKhonKaen"
      },
      {
        "id": "400",
        "name": "KhonKaenPhilatelicMuseum"
      },
      {
        "id": "401",
        "name": "Collectible"
      },
      {
        "id": "402",
        "name": "NamPhong"
      },
      {
        "id": "403",
        "name": "KuPraphachai(KuBanNaKhamNoi)"
      },
      {
        "id": "404",
        "name": "KaennakornLake"
      },
      {
        "id": "405",
        "name": "Lake"
      },
      {
        "id": "406",
        "name": "PraThatKhamKhan"
      },
      {
        "id": "407",
        "name": "HistroricalSite"
      },
      {
        "id": "408",
        "name": "Loei"
      },
      {
        "id": "409",
        "name": "Chiang Khan"
      },
      {
        "id": "410",
        "name": "Wat Sri Khun Muang"
      },
      {
        "id": "411",
        "name": "Kaeng Khut Khu"
      },
      {
        "id": "412",
        "name": "Mueang Phetchabun"
      },
      {
        "id": "413",
        "name": "Tat Mok National Park"
      },
      {
        "id": "414",
        "name": "Wat Chalong"
      },
      {
        "id": "415",
        "name": "Wat Chaitaram"
      },
      {
        "id": "416",
        "name": "Sawankhalok"
      },
      {
        "id": "417",
        "name": "OrganicAgricultureProjectSukhothaiAirport"
      },
      {
        "id": "418",
        "name": "Phuket Aquarium"
      },
      {
        "id": "420",
        "name": "Tha Muang"
      },
      {
        "id": "421",
        "name": "WatThamSuea"
      },
      {
        "id": "422",
        "name": "MueangKrabi"
      },
      {
        "id": "423",
        "name": "PaphuThaPomKhlongSongNam"
      },
      {
        "id": "424",
        "name": "Canal"
      },
      {
        "id": "425",
        "name": "MuKohHong"
      },
      {
        "id": "426",
        "name": "DivingSite"
      },
      {
        "id": "427",
        "name": "Island"
      },
      {
        "id": "428",
        "name": "Fishing"
      },
      {
        "id": "429",
        "name": "ScubaDiving"
      },
      {
        "id": "430",
        "name": "Canoeing"
      },
      {
        "id": "431",
        "name": "Snorkelling"
      },
      {
        "id": "432",
        "name": "beachlife"
      },
      {
        "id": "433",
        "name": "MueangSukhothai"
      },
      {
        "id": "434",
        "name": "Sangkhalok Museum"
      },
      {
        "id": "435",
        "name": "ThaleWaekOrSeparatedSea"
      },
      {
        "id": "436",
        "name": "Tak"
      },
      {
        "id": "437",
        "name": "Mueang Tak"
      },
      {
        "id": "438",
        "name": "Rattanakosin Memorial Bridge"
      },
      {
        "id": "439",
        "name": "BanDanLanHoi"
      },
      {
        "id": "440",
        "name": "ChaoRamCave"
      },
      {
        "id": "441",
        "name": "Phra Phut Nawamin Tara Mongkhong Lila Winnakara Phirak"
      },
      {
        "id": "442",
        "name": "Phra Yai Phu Khok Ngio"
      },
      {
        "id": "443",
        "name": "Kumphawapi"
      },
      {
        "id": "444",
        "name": "Phrathat Don Kaeo"
      },
      {
        "id": "445",
        "name": "Phetchabun Cultural Center"
      },
      {
        "id": "446",
        "name": "PhramahathatKaenNakhon"
      },
      {
        "id": "447",
        "name": "Thara Erawan Waterfall"
      },
      {
        "id": "448",
        "name": "water fall"
      },
      {
        "id": "449",
        "name": "KhiriMat"
      },
      {
        "id": "450",
        "name": "PrangKhaoPuCha"
      },
      {
        "id": "451",
        "name": "SukhothaiHistoricalPark"
      },
      {
        "id": "452",
        "name": "WatMahathatAncientRemains"
      },
      {
        "id": "453",
        "name": "Sam Ngao"
      },
      {
        "id": "454",
        "name": "Bhumibol Dam"
      },
      {
        "id": "455",
        "name": "TharaWasanCave"
      },
      {
        "id": "456",
        "name": "SaiYok"
      },
      {
        "id": "457",
        "name": "HellFirePassMemorialMuseum"
      },
      {
        "id": "458",
        "name": "Nang Rong"
      },
      {
        "id": "459",
        "name": "Wat Khun Kong"
      },
      {
        "id": "460",
        "name": "Rai-LayBeach"
      },
      {
        "id": "461",
        "name": "SeaKayaking"
      },
      {
        "id": "462",
        "name": "RockClimbing"
      },
      {
        "id": "463",
        "name": "Sunset"
      },
      {
        "id": "464",
        "name": "MuKhoPhiPhi"
      },
      {
        "id": "465",
        "name": "Lansang National Park"
      },
      {
        "id": "466",
        "name": "Prakhon Chai"
      },
      {
        "id": "467",
        "name": "Prasat Mueang Tam Sanctury"
      },
      {
        "id": "468",
        "name": "AmazingThailandBeautifulPlace"
      },
      {
        "id": "469",
        "name": "Phanom Rung Historical Park"
      },
      {
        "id": "470",
        "name": "Mueang Udon Thani Museum"
      },
      {
        "id": "471",
        "name": "Kao Khad Views Tower"
      },
      {
        "id": "472",
        "name": "Nam Nao National Park"
      },
      {
        "id": "473",
        "name": "MueangSingHistoricalPark"
      },
      {
        "id": "474",
        "name": "Taksin Maharat National Park Viewpoint"
      },
      {
        "id": "475",
        "name": "Wat Phra Phutthabat Phu Khwai Ngoen"
      },
      {
        "id": "476",
        "name": "Trat"
      },
      {
        "id": "477",
        "name": "Koh Kut"
      },
      {
        "id": "478",
        "name": "Koh Kradat"
      },
      {
        "id": "479",
        "name": "Koh Mak"
      },
      {
        "id": "480",
        "name": "DaowaduengCave"
      },
      {
        "id": "481",
        "name": "RockClimbing(AoRailay)"
      },
      {
        "id": "482",
        "name": "Thung Salaeng Luang National Park"
      },
      {
        "id": "483",
        "name": "Wang Tum Waterfall"
      },
      {
        "id": "484",
        "name": "Trok Baan Chin"
      },
      {
        "id": "485",
        "name": "Rim Sai Than Lan Krathong Sai"
      },
      {
        "id": "486",
        "name": "Red Lotus Lake"
      },
      {
        "id": "487",
        "name": "Wat Khao Phra Angkhan"
      },
      {
        "id": "488",
        "name": "KhaoLuangSukhothai"
      },
      {
        "id": "489",
        "name": "Landscapephotography"
      },
      {
        "id": "490",
        "name": "BanNaTonChan"
      },
      {
        "id": "491",
        "name": "Trang"
      },
      {
        "id": "492",
        "name": "Kan Tang"
      },
      {
        "id": "493",
        "name": "Koh Kradan"
      },
      {
        "id": "494",
        "name": "Mae Sot"
      },
      {
        "id": "495",
        "name": "Phra That Doi Hin Kio"
      },
      {
        "id": "496",
        "name": "Tha Song Yang"
      },
      {
        "id": "497",
        "name": "Mae Moei National Park"
      },
      {
        "id": "498",
        "name": "NatureAndWildlife"
      },
      {
        "id": "499",
        "name": "Wat Chai Chana Songkram"
      },
      {
        "id": "500",
        "name": "Tak Local Food Festival"
      },
      {
        "id": "501",
        "name": "foodtour"
      },
      {
        "id": "502",
        "name": "Buriram"
      },
      {
        "id": "503",
        "name": "Mueang Buriram"
      },
      {
        "id": "504",
        "name": "Chang International Circuit"
      },
      {
        "id": "505",
        "name": "Nongki"
      },
      {
        "id": "506",
        "name": "Prasat Thong Beach"
      },
      {
        "id": "507",
        "name": "NongBuaLentCandleFestival"
      },
      {
        "id": "508",
        "name": "Khao Kradong Volcano Forest Park"
      },
      {
        "id": "509",
        "name": "Phra Borommathat Chedi Si Suwachanakhunanuson"
      },
      {
        "id": "510",
        "name": "Wat Pa Khao Noi"
      },
      {
        "id": "511",
        "name": "MallikaR.E.124"
      },
      {
        "id": "512",
        "name": "Mueang"
      },
      {
        "id": "513",
        "name": "The Big Buddha Phuket Thailand"
      },
      {
        "id": "514",
        "name": "Sarasin Bridge View Point"
      },
      {
        "id": "515",
        "name": "Phuket Gateway"
      },
      {
        "id": "516",
        "name": "MueangTrang"
      },
      {
        "id": "517",
        "name": "TrangChurch"
      },
      {
        "id": "518",
        "name": "OldTownTrang"
      },
      {
        "id": "519",
        "name": "Tamnak Chan Park"
      },
      {
        "id": "520",
        "name": "NaYong"
      },
      {
        "id": "521",
        "name": "NokNamKhlongLamSanNationalPark"
      },
      {
        "id": "522",
        "name": "WatKhlongThomMuseum"
      },
      {
        "id": "523",
        "name": "Mueang Krabi"
      },
      {
        "id": "524",
        "name": "Krabi Berk Fah Andaman Festival"
      },
      {
        "id": "525",
        "name": "Canoeing Kayaking"
      },
      {
        "id": "526",
        "name": "seascape"
      },
      {
        "id": "527",
        "name": "MahaRattanaChediSriTraiLokaDhata(WatThungSetthi)"
      },
      {
        "id": "528",
        "name": "Surat Thani"
      },
      {
        "id": "529",
        "name": "Koh Samui"
      },
      {
        "id": "530",
        "name": "Hin Ta Hin Yai"
      },
      {
        "id": "531",
        "name": "WatChaiSi"
      },
      {
        "id": "532",
        "name": "Wat Pa Ban Tat"
      },
      {
        "id": "533",
        "name": "The Metropolis Pillar Shrine Of Phetchaboon"
      },
      {
        "id": "534",
        "name": "Chaiya"
      },
      {
        "id": "535",
        "name": "Chaiya National Museum"
      },
      {
        "id": "536",
        "name": "Historical"
      },
      {
        "id": "537",
        "name": "Archeological"
      },
      {
        "id": "538",
        "name": "Wat Phra Borommathat Chaiya Ratcha Wora Wihan"
      },
      {
        "id": "539",
        "name": "PhrayaRatsadanuPraditMahisonphakdiMonument(KhosimbiNaRanong)"
      },
      {
        "id": "540",
        "name": "HuaiYot"
      },
      {
        "id": "541",
        "name": "LayKhaoKobCave"
      },
      {
        "id": "542",
        "name": "CaveExploration"
      },
      {
        "id": "543",
        "name": "ChaoPorLakMuangKhonKaenShrine"
      },
      {
        "id": "544",
        "name": "Kantang"
      },
      {
        "id": "545",
        "name": "KohMook-MorakotCave"
      },
      {
        "id": "546",
        "name": "Mueang Trat"
      },
      {
        "id": "547",
        "name": "Muk Kaew & Sai Kaew Beach"
      },
      {
        "id": "548",
        "name": "Lan Sai Beach"
      },
      {
        "id": "549",
        "name": "Chedi Wat Long"
      },
      {
        "id": "550",
        "name": "Wat Phai Lom"
      },
      {
        "id": "551",
        "name": "Wat Matchimawat"
      },
      {
        "id": "552",
        "name": "Wat Thip Phayarat Nimit"
      },
      {
        "id": "553",
        "name": "Krom Luang Prachaksinlapakhom Monument"
      },
      {
        "id": "554",
        "name": "Monument"
      },
      {
        "id": "555",
        "name": "Lamai Beach"
      },
      {
        "id": "556",
        "name": "Laem Sor Pagoda"
      },
      {
        "id": "557",
        "name": "KhonKaenNationalMuseum"
      },
      {
        "id": "558",
        "name": "Ban Ta Khun"
      },
      {
        "id": "559",
        "name": "Rajjaprabha Dam (Chiao Lan Dam)"
      },
      {
        "id": "560",
        "name": "PhrayaRatsadaNuPraditMahisaraPhakdiMuseum"
      },
      {
        "id": "561",
        "name": "KantangTrainStation"
      },
      {
        "id": "562",
        "name": "Phanom"
      },
      {
        "id": "563",
        "name": "Khao Sok National Park"
      },
      {
        "id": "564",
        "name": "Khlong Yai"
      },
      {
        "id": "565",
        "name": "Ban Chuen Beach"
      },
      {
        "id": "566",
        "name": "Trat Museum Trat Province"
      },
      {
        "id": "567",
        "name": "KhaoSuanKwang"
      },
      {
        "id": "568",
        "name": "KhonKaenZoo"
      },
      {
        "id": "569",
        "name": "Mueang Trang"
      },
      {
        "id": "570",
        "name": "Cinta Garden"
      },
      {
        "id": "571",
        "name": "Laem Ngob"
      },
      {
        "id": "572",
        "name": "Namchieo Community"
      },
      {
        "id": "573",
        "name": "Mosque"
      },
      {
        "id": "574",
        "name": "HomeStay"
      },
      {
        "id": "575",
        "name": "Wat Buppharam"
      },
      {
        "id": "576",
        "name": "Thai-Chinese Cultural Centre"
      },
      {
        "id": "577",
        "name": "Chiang Khan Walking street"
      },
      {
        "id": "578",
        "name": "Shopping"
      },
      {
        "id": "579",
        "name": "ThaMuang"
      },
      {
        "id": "580",
        "name": "Emjaroen Gallery"
      },
      {
        "id": "581",
        "name": "Chiang Khan District"
      },
      {
        "id": "582",
        "name": "Tai Dam Cultural Village"
      },
      {
        "id": "583",
        "name": "Saphan Hin"
      },
      {
        "id": "584",
        "name": "Park and Public Park"
      },
      {
        "id": "585",
        "name": "Koh Chang"
      },
      {
        "id": "586",
        "name": "Ban Tak"
      },
      {
        "id": "587",
        "name": "Wat Phra Boromthat"
      },
      {
        "id": "588",
        "name": "Doi Luang Tak"
      },
      {
        "id": "589",
        "name": "Sunbeam Hotel"
      },
      {
        "id": "590",
        "name": "Accomodation"
      },
      {
        "id": "591",
        "name": "Uthai"
      },
      {
        "id": "592",
        "name": "Ayutthaya Grand Hotel"
      },
      {
        "id": "593",
        "name": "hotel"
      },
      {
        "id": "594",
        "name": "BeautifulHotel"
      },
      {
        "id": "595",
        "name": "Hard Rock Hotel Pattaya"
      },
      {
        "id": "596",
        "name": "BangRak"
      },
      {
        "id": "597",
        "name": "Shangri-LaHotelBangkok"
      },
      {
        "id": "598",
        "name": "SheratonGrandeSukhumvit"
      },
      {
        "id": "599",
        "name": "Intercontinental Hua Hin Resort"
      },
      {
        "id": "600",
        "name": "SALA@HUAHIN Serviced Apartment"
      },
      {
        "id": "601",
        "name": "River View Place Hotel"
      },
      {
        "id": "602",
        "name": "The Series Resort Khaoyai"
      },
      {
        "id": "603",
        "name": "ItalianFood"
      },
      {
        "id": "604",
        "name": "Buffet"
      },
      {
        "id": "605",
        "name": "resort"
      },
      {
        "id": "606",
        "name": "Hotel Labaris Khao Yai"
      },
      {
        "id": "607",
        "name": "WangcomeHotel"
      },
      {
        "id": "608",
        "name": "Holiday Garden Hotel & Resort"
      },
      {
        "id": "609",
        "name": "WiangInnHotel"
      },
      {
        "id": "610",
        "name": "Dusit D2 Hotel Chiang Mai"
      },
      {
        "id": "611",
        "name": "LuxuryHotel"
      },
      {
        "id": "612",
        "name": "PailynHotel"
      },
      {
        "id": "613",
        "name": "BudgetHotel"
      },
      {
        "id": "614",
        "name": "RiverKwaiVillageHotel"
      },
      {
        "id": "615",
        "name": "CharoenThaniKhonKaen"
      },
      {
        "id": "616",
        "name": "PullmanKhonKaenRajaOrchid"
      },
      {
        "id": "617",
        "name": "Dewa Phuket (Beach Resort"
      },
      {
        "id": "618",
        "name": "Villas and Suites)"
      },
      {
        "id": "619",
        "name": "5 star accommodation"
      },
      {
        "id": "620",
        "name": "NanNakara Boutique Hotel"
      },
      {
        "id": "621",
        "name": "3 star accommodation"
      },
      {
        "id": "622",
        "name": "Sathon"
      },
      {
        "id": "623",
        "name": "BlueElephant"
      },
      {
        "id": "624",
        "name": "ThaiCooking"
      },
      {
        "id": "625",
        "name": "Sailom Restaurant Hua Hin"
      },
      {
        "id": "626",
        "name": "Recommended Restaurant"
      },
      {
        "id": "627",
        "name": "Thai food"
      },
      {
        "id": "628",
        "name": "Ban Mai Rim Nam"
      },
      {
        "id": "629",
        "name": "Wat Yai Noodle"
      },
      {
        "id": "630",
        "name": "Ban Mai Chai Nam"
      },
      {
        "id": "631",
        "name": "Oceanside Beach Club And Restaurant"
      },
      {
        "id": "632",
        "name": "International Food"
      },
      {
        "id": "633",
        "name": "Wilaiwan Hua Hin"
      },
      {
        "id": "634",
        "name": "Dairy Home"
      },
      {
        "id": "635",
        "name": "EuropeanFood"
      },
      {
        "id": "636",
        "name": "Steak"
      },
      {
        "id": "637",
        "name": "IceCream"
      },
      {
        "id": "638",
        "name": "Paste"
      },
      {
        "id": "639",
        "name": "MichelinGuide"
      },
      {
        "id": "640",
        "name": "Savelberg"
      },
      {
        "id": "641",
        "name": "Vadhana"
      },
      {
        "id": "642",
        "name": "Arunwan"
      },
      {
        "id": "643",
        "name": "ChineseFood"
      },
      {
        "id": "644",
        "name": "CharoenSaengSilom"
      },
      {
        "id": "645",
        "name": "KruaApsorn"
      },
      {
        "id": "646",
        "name": "Pen Lao"
      },
      {
        "id": "647",
        "name": "HalalFood"
      },
      {
        "id": "648",
        "name": "AsianFood"
      },
      {
        "id": "649",
        "name": "De Riva Ayothaya"
      },
      {
        "id": "650",
        "name": "SiroccoRestaurant"
      },
      {
        "id": "651",
        "name": "PubAndBar"
      },
      {
        "id": "652",
        "name": "Mum Aroi"
      },
      {
        "id": "653",
        "name": "The Wine Ayutthaya"
      },
      {
        "id": "654",
        "name": "SanehJaan"
      },
      {
        "id": "655",
        "name": "Watthana"
      },
      {
        "id": "656",
        "name": "BaanKhanitha(Sukhumvit 23)"
      },
      {
        "id": "658",
        "name": "The Chocolate Factory Huahin"
      },
      {
        "id": "659",
        "name": "Midwinter Green"
      },
      {
        "id": "660",
        "name": "PizzaAndPasta"
      },
      {
        "id": "661",
        "name": "The Mew Cafe"
      },
      {
        "id": "662",
        "name": "Bakery"
      },
      {
        "id": "663",
        "name": "Nong Sarai"
      },
      {
        "id": "664",
        "name": "FAVE' DISH by The Paz Khao Yai"
      },
      {
        "id": "665",
        "name": "Beverage"
      },
      {
        "id": "666",
        "name": "Fusion"
      },
      {
        "id": "667",
        "name": "Baan Kao Nhom"
      },
      {
        "id": "668",
        "name": "Bok Noodles"
      },
      {
        "id": "669",
        "name": "Bang Sai"
      },
      {
        "id": "670",
        "name": "Ruen Thai Kung Pao"
      },
      {
        "id": "671",
        "name": "Prime 19 Khaoyai"
      },
      {
        "id": "672",
        "name": "Barbecue"
      },
      {
        "id": "673",
        "name": "Pong Ta Long"
      },
      {
        "id": "674",
        "name": "Toscana Valley"
      },
      {
        "id": "675",
        "name": "Seafood"
      },
      {
        "id": "676",
        "name": "Restaurant"
      },
      {
        "id": "677",
        "name": "KlongSan"
      },
      {
        "id": "678",
        "name": "PrincessTerracePub&Restaurant"
      },
      {
        "id": "679",
        "name": "MKGoldEkkamai"
      },
      {
        "id": "680",
        "name": "La Ferme Pattaya"
      },
      {
        "id": "681",
        "name": "fusion food"
      },
      {
        "id": "682",
        "name": "Suttangrak Pattaya"
      },
      {
        "id": "683",
        "name": "Drift @ Hilton Pattaya"
      },
      {
        "id": "684",
        "name": "dessert"
      },
      {
        "id": "685",
        "name": "Hops BrewHouse"
      },
      {
        "id": "686",
        "name": "Italian food"
      },
      {
        "id": "687",
        "name": "Vine and Alcohol"
      },
      {
        "id": "688",
        "name": "Comedara"
      },
      {
        "id": "689",
        "name": "Khum Khantoke"
      },
      {
        "id": "690",
        "name": "SabunNgaKhanTok"
      },
      {
        "id": "691",
        "name": "ChoCharoenChai"
      },
      {
        "id": "692",
        "name": "TongTungRestaurant"
      },
      {
        "id": "693",
        "name": "Mae Rim"
      },
      {
        "id": "694",
        "name": "Baan Bua Loy"
      },
      {
        "id": "695",
        "name": "Phu Pieng"
      },
      {
        "id": "696",
        "name": "Hua Loet Rot restaurant"
      },
      {
        "id": "697",
        "name": "recommended restaurants"
      },
      {
        "id": "698",
        "name": "food and beverage"
      },
      {
        "id": "699",
        "name": "Khrua Menu Pla"
      },
      {
        "id": "700",
        "name": "DaVinciRistorante"
      },
      {
        "id": "701",
        "name": "Huean Hom"
      },
      {
        "id": "702",
        "name": "Thai cuisine"
      },
      {
        "id": "703",
        "name": "Northern food"
      },
      {
        "id": "704",
        "name": "Pak Nam Seafood"
      },
      {
        "id": "705",
        "name": "Wanda Restaurant"
      },
      {
        "id": "706",
        "name": "LanMaiHom"
      },
      {
        "id": "707",
        "name": "Anchan Noodle"
      },
      {
        "id": "708",
        "name": "Chuan Chim"
      },
      {
        "id": "709",
        "name": "San Sai"
      },
      {
        "id": "710",
        "name": "Ohkajhu Organic Vegetable Garden"
      },
      {
        "id": "711",
        "name": "The Glass House Chiangmai"
      },
      {
        "id": "712",
        "name": "The Flowery Home Chiangmai"
      },
      {
        "id": "713",
        "name": "AfternoonTeaamazingไทยเท่ห์"
      },
      {
        "id": "714",
        "name": "Myst MAYA Chiangmai"
      },
      {
        "id": "715",
        "name": "Nimmanhaemin Road"
      },
      {
        "id": "716",
        "name": "AyeRestaurant"
      },
      {
        "id": "717",
        "name": "Chang Meng Pochana"
      },
      {
        "id": "718",
        "name": "Recommend Restaurant"
      },
      {
        "id": "719",
        "name": "Chinese Food"
      },
      {
        "id": "720",
        "name": "MueangSiSawat"
      },
      {
        "id": "721",
        "name": "RueanTharaRestaurant"
      },
      {
        "id": "722",
        "name": "Wichian Buri"
      },
      {
        "id": "723",
        "name": "Kai Yang Bua Tong"
      },
      {
        "id": "724",
        "name": "BaanBussayapaRestaurant"
      },
      {
        "id": "725",
        "name": "Iyarawadee"
      },
      {
        "id": "726",
        "name": "Chor Muang Cafe & Restaurant"
      },
      {
        "id": "727",
        "name": "Chit Chon Restaurant"
      },
      {
        "id": "728",
        "name": "Khaomao Khaofang Restaurant"
      },
      {
        "id": "729",
        "name": "MueangSawankhalok"
      },
      {
        "id": "730",
        "name": "VivaCafé"
      },
      {
        "id": "731",
        "name": "Nung Yong Khlong Yam Market"
      },
      {
        "id": "732",
        "name": "Ra-biangCafe’"
      },
      {
        "id": "733",
        "name": "RiverKwaiFloatingRestaurant"
      },
      {
        "id": "734",
        "name": "ONE TEA COFFEE"
      },
      {
        "id": "735",
        "name": "AfternoonTea"
      },
      {
        "id": "736",
        "name": "TakeAway"
      },
      {
        "id": "737",
        "name": "Brunch"
      },
      {
        "id": "738",
        "name": "PaeNaMueangRestaurant"
      },
      {
        "id": "739",
        "name": "foodtrip"
      },
      {
        "id": "740",
        "name": "ThaMaka"
      },
      {
        "id": "741",
        "name": "PornsakNoodle"
      },
      {
        "id": "742",
        "name": "Mueang Surat Thani"
      },
      {
        "id": "743",
        "name": "Pad Thai Tha Chang (Pa Nui)"
      },
      {
        "id": "744",
        "name": "BicycleCafe"
      },
      {
        "id": "745",
        "name": "CharmingChaoKachaiRestaurant"
      },
      {
        "id": "746",
        "name": "BaanSuanBuaSteak&Restaurant"
      },
      {
        "id": "747",
        "name": "KeereeMantraRestaurant"
      },
      {
        "id": "748",
        "name": "Mueang Kanchanaburi"
      },
      {
        "id": "749",
        "name": "Loft Restaurant & Bar"
      },
      {
        "id": "750",
        "name": "JapaneseFood"
      },
      {
        "id": "751",
        "name": "Wangsai Seafood"
      },
      {
        "id": "752",
        "name": "Krua Village @ Railay Village Resort & Spa"
      },
      {
        "id": "753",
        "name": "Bangnara Roti @ Krabi"
      },
      {
        "id": "754",
        "name": "Ruan Talay"
      },
      {
        "id": "755",
        "name": "Krabi Front Bay Resort"
      },
      {
        "id": "756",
        "name": "Ruen Thai"
      },
      {
        "id": "757",
        "name": "michelin guide"
      },
      {
        "id": "758",
        "name": "Black Ginger"
      },
      {
        "id": "759",
        "name": "Mee Kola"
      },
      {
        "id": "760",
        "name": "BALCONY BAKERY & RESTAURANT"
      },
      {
        "id": "761",
        "name": "Richy"
      },
      {
        "id": "762",
        "name": "ChiewDumReataurant"
      },
      {
        "id": "763",
        "name": "Pong Ocha 2"
      },
      {
        "id": "764",
        "name": "Silk Restaurant & Bar"
      },
      {
        "id": "765",
        "name": "Blue Elephant Phuket"
      },
      {
        "id": "766",
        "name": "Suay Restaurant Cherngtalay"
      },
      {
        "id": "767",
        "name": "Red Sauce"
      },
      {
        "id": "768",
        "name": "Tu Kab Khao Restaurant Phuket"
      },
      {
        "id": "769",
        "name": "O Cha Rot"
      },
      {
        "id": "770",
        "name": "Punpang"
      },
      {
        "id": "771",
        "name": "SweetGallery"
      },
      {
        "id": "772",
        "name": "Chef Chom's Thai Restaurant"
      },
      {
        "id": "773",
        "name": "Khrua Khun Nit"
      },
      {
        "id": "774",
        "name": "Khaotom Phui"
      },
      {
        "id": "775",
        "name": "KaiYangRabeabKhaoSuanKwang"
      },
      {
        "id": "776",
        "name": "Mueang Mai"
      },
      {
        "id": "777",
        "name": "The Windmill"
      },
      {
        "id": "778",
        "name": "Khrua Pum Duang"
      },
      {
        "id": "779",
        "name": "LeTrang2"
      },
      {
        "id": "780",
        "name": "KhruaLamphu"
      },
      {
        "id": "781",
        "name": "Trang Moo Yang"
      },
      {
        "id": "782",
        "name": "Madubi Restaurant"
      },
      {
        "id": "783",
        "name": "KruaSupannigaByKhunyai"
      },
      {
        "id": "784",
        "name": "Mahasamut Library by \"ห้องสมุดใจใหญ่\""
      },
      {
        "id": "785",
        "name": "Libraries"
      },
      {
        "id": "786",
        "name": "THE BARN : EATERY DESIGN"
      },
      {
        "id": "787",
        "name": "The House by Ginger"
      },
      {
        "id": "788",
        "name": "Laem Hin Seafood Phuket"
      },
      {
        "id": "789",
        "name": "Suriya Garden Restaurant"
      },
      {
        "id": "790",
        "name": "Mueang Chiang Rai"
      },
      {
        "id": "791",
        "name": "The Riverie By Katathani"
      },
      {
        "id": "792",
        "name": "Keeree Tara Restaurant"
      },
      {
        "id": "793",
        "name": "PhuTongRestaurant"
      },
      {
        "id": "794",
        "name": "TmkSukiShabu"
      },
      {
        "id": "795",
        "name": "Chatuchak"
      },
      {
        "id": "796",
        "name": "ChatuchakMarket"
      },
      {
        "id": "797",
        "name": "Phonthip (Nam Nguan)"
      },
      {
        "id": "798",
        "name": "Prachuap Khiri Khan Otop Center"
      },
      {
        "id": "799",
        "name": "Hua Hin Batik"
      },
      {
        "id": "800",
        "name": "Sor Arunyik"
      },
      {
        "id": "801",
        "name": "Roti Sai Mai Bang Imron"
      },
      {
        "id": "802",
        "name": "Ayothaya Floating Market"
      },
      {
        "id": "803",
        "name": "FloatingMarket"
      },
      {
        "id": "804",
        "name": "Talard Kong Khong"
      },
      {
        "id": "805",
        "name": "Prachuao Khiri Khan"
      },
      {
        "id": "806",
        "name": "Hua Hin Night Market"
      },
      {
        "id": "807",
        "name": "Cicada Market"
      },
      {
        "id": "808",
        "name": "Tavorn Park"
      },
      {
        "id": "809",
        "name": "The Birder’s Lodge"
      },
      {
        "id": "810",
        "name": "Thai Tint Shop"
      },
      {
        "id": "811",
        "name": "Palio KhaoYai"
      },
      {
        "id": "812",
        "name": "Baan Pak Tob Chawa Community"
      },
      {
        "id": "813",
        "name": "Glass Blowing Group"
      },
      {
        "id": "814",
        "name": "Leave the center of Che Keng"
      },
      {
        "id": "815",
        "name": "Terminal 21 Shopping Pattaya"
      },
      {
        "id": "816",
        "name": "Shopping Center"
      },
      {
        "id": "817",
        "name": "Mueang Chonburi"
      },
      {
        "id": "818",
        "name": "Toffee Cake Chonburi By Mattana"
      },
      {
        "id": "819",
        "name": "Bekery"
      },
      {
        "id": "820",
        "name": "Hom Run Juan"
      },
      {
        "id": "821",
        "name": "Thai dessert"
      },
      {
        "id": "822",
        "name": "Bqng Lamung"
      },
      {
        "id": "823",
        "name": "Gems Gallery Pattaya"
      },
      {
        "id": "824",
        "name": "accessories"
      },
      {
        "id": "825",
        "name": "naemvassana"
      },
      {
        "id": "826",
        "name": "SilomNightMarket"
      },
      {
        "id": "827",
        "name": "AsiatiqueTheRiverfront"
      },
      {
        "id": "828",
        "name": "WomenApparel"
      },
      {
        "id": "829",
        "name": "MenApparel"
      },
      {
        "id": "830",
        "name": "Tahiland"
      },
      {
        "id": "831",
        "name": "JIMTHOMSON"
      },
      {
        "id": "832",
        "name": "Fabric"
      },
      {
        "id": "833",
        "name": "Wattana"
      },
      {
        "id": "834",
        "name": "Astinee"
      },
      {
        "id": "835",
        "name": "Siam Paragon"
      },
      {
        "id": "836",
        "name": "Pua"
      },
      {
        "id": "837",
        "name": "Thai Lue Ban Ket Textile Group"
      },
      {
        "id": "838",
        "name": "KongLuang"
      },
      {
        "id": "839",
        "name": "Khunmae Chu"
      },
      {
        "id": "840",
        "name": "Recommended souvenir"
      },
      {
        "id": "841",
        "name": "S.Shinawatra Thai Silk"
      },
      {
        "id": "842",
        "name": "Central Plaza Chiang Mai Airport"
      },
      {
        "id": "843",
        "name": "Waroros Market"
      },
      {
        "id": "844",
        "name": "Nanthawan"
      },
      {
        "id": "845",
        "name": "Ban Thananchai"
      },
      {
        "id": "846",
        "name": "Pip Silver Shop"
      },
      {
        "id": "847",
        "name": "Fai Ngoen"
      },
      {
        "id": "848",
        "name": "Wannapha"
      },
      {
        "id": "849",
        "name": "SuchinMuYo"
      },
      {
        "id": "850",
        "name": "Doi Saket"
      },
      {
        "id": "851",
        "name": "Chiang Mai Celadon"
      },
      {
        "id": "852",
        "name": "OTOP Nan Center"
      },
      {
        "id": "853",
        "name": "DOI SILVER FACTORY"
      },
      {
        "id": "854",
        "name": "Chiang Mai Walking Street"
      },
      {
        "id": "855",
        "name": "Chiang Mai Night Bazaar"
      },
      {
        "id": "856",
        "name": "WiangChai"
      },
      {
        "id": "857",
        "name": "LingerPotteryStudio"
      },
      {
        "id": "858",
        "name": "MAYA Lifestyle Shopping Center"
      },
      {
        "id": "859",
        "name": "DoyDinDangPottery"
      },
      {
        "id": "860",
        "name": "B. N. Farm"
      },
      {
        "id": "861",
        "name": "Flowers"
      },
      {
        "id": "862",
        "name": "Herb Oil The Number 108"
      },
      {
        "id": "863",
        "name": "Herb"
      },
      {
        "id": "864",
        "name": "SriSatchanalai"
      },
      {
        "id": "865",
        "name": "BaanThongSomsamai"
      },
      {
        "id": "866",
        "name": "LamTatAncientSilverShop"
      },
      {
        "id": "867",
        "name": "SiSamrong"
      },
      {
        "id": "868",
        "name": "ThuaThotLonSinShop"
      },
      {
        "id": "869",
        "name": "Khun Ma Kram Petchabun"
      },
      {
        "id": "870",
        "name": "Rim Moei Market"
      },
      {
        "id": "871",
        "name": "PhaThongShop"
      },
      {
        "id": "872",
        "name": "SukhothaiCulturalCenter"
      },
      {
        "id": "873",
        "name": "KruAwShop"
      },
      {
        "id": "874",
        "name": "Sukhothai Ceramics"
      },
      {
        "id": "875",
        "name": "SuthepSangkhalokShop"
      },
      {
        "id": "876",
        "name": "Muser Hill Tribe Local Market"
      },
      {
        "id": "877",
        "name": "Oraphan Souvenir Shop"
      },
      {
        "id": "878",
        "name": "Turtle Scale Pattern Textile"
      },
      {
        "id": "879",
        "name": "Textile"
      },
      {
        "id": "880",
        "name": "Lai Mai"
      },
      {
        "id": "881",
        "name": "Liang Huad"
      },
      {
        "id": "882",
        "name": "Gourmet"
      },
      {
        "id": "883",
        "name": "Mueang Suat Thani"
      },
      {
        "id": "884",
        "name": "Baan Don Floating Market"
      },
      {
        "id": "885",
        "name": "Tha Chang"
      },
      {
        "id": "886",
        "name": "Mae Jit Souvenir Shop"
      },
      {
        "id": "887",
        "name": "KhanarbNamRealPearl"
      },
      {
        "id": "888",
        "name": "Jewellery"
      },
      {
        "id": "889",
        "name": "Jee-Or Souvenirs Shop"
      },
      {
        "id": "890",
        "name": "Sri-KrabiSouvenirShop"
      },
      {
        "id": "891",
        "name": "Lanta"
      },
      {
        "id": "892",
        "name": "LantaBatik"
      },
      {
        "id": "893",
        "name": "Kanom Mae Juan"
      },
      {
        "id": "894",
        "name": "Tha Phae Walking Street"
      },
      {
        "id": "895",
        "name": "Hang Dong"
      },
      {
        "id": "896",
        "name": "Kad Farang Village"
      },
      {
        "id": "897",
        "name": "Jing Jai Market Chiang Mai"
      },
      {
        "id": "898",
        "name": "Phuket Walking Street"
      },
      {
        "id": "899",
        "name": "Jungceylon Shopping Center"
      },
      {
        "id": "900",
        "name": "Khanom Pia Soi 9"
      },
      {
        "id": "901",
        "name": "Teaw Hua Yue"
      },
      {
        "id": "902",
        "name": "Thong Muan Nuansi"
      },
      {
        "id": "903",
        "name": "Alternative"
      },
      {
        "id": "904",
        "name": "Mo Yo Mae Uan"
      },
      {
        "id": "905",
        "name": "Recommended souvenir shop"
      },
      {
        "id": "906",
        "name": "Naem Parinya"
      },
      {
        "id": "907",
        "name": "Anantaphon Pholi Kan"
      },
      {
        "id": "908",
        "name": "HengNguanHiang"
      },
      {
        "id": "909",
        "name": "Trang OTOP Lifestyle"
      },
      {
        "id": "910",
        "name": "KhonKaenwalkingstreet"
      },
      {
        "id": "911",
        "name": "TonTannGreenMarket"
      },
      {
        "id": "912",
        "name": "CentralPlazaKhonKaen"
      },
      {
        "id": "913",
        "name": "Huahin"
      },
      {
        "id": "914",
        "name": "Khomapastr"
      },
      {
        "id": "915",
        "name": "Mueang Phetchaburi"
      },
      {
        "id": "916",
        "name": "Bankanom Nuntawan"
      },
      {
        "id": "917",
        "name": "Central World"
      },
      {
        "id": "918",
        "name": "The Platinum Fashion Mall"
      },
      {
        "id": "919",
        "name": "ChildrenApparel"
      },
      {
        "id": "920",
        "name": "Huai Yod"
      },
      {
        "id": "921",
        "name": "Kookmimg"
      },
      {
        "id": "922",
        "name": "MBKCenter"
      },
      {
        "id": "923",
        "name": "Rtchathewi"
      },
      {
        "id": "924",
        "name": "King Power"
      },
      {
        "id": "925",
        "name": "Chillout"
      },
      {
        "id": "926",
        "name": "Jim Thompson Outlet"
      },
      {
        "id": "927",
        "name": "Lhim Po Iam Kha Nom Tao So"
      },
      {
        "id": "928",
        "name": "Peranakan Phuket Boutique"
      },
      {
        "id": "929",
        "name": "Gems Gallery phuket"
      },
      {
        "id": "930",
        "name": "Chulalongkorn University Book Center"
      },
      {
        "id": "931",
        "name": "book"
      },
      {
        "id": "932",
        "name": "Ar-Kong@Phuket old Town"
      },
      {
        "id": "933",
        "name": "Dao Reung Blanket"
      },
      {
        "id": "934",
        "name": "Sarach Tamarind"
      },
      {
        "id": "935",
        "name": "Chaing Rai Walking Street"
      },
      {
        "id": "936",
        "name": "Tongta & Tawan Bakery"
      },
      {
        "id": "937",
        "name": "Bua Bakery @Krabi"
      },
      {
        "id": "938",
        "name": "Wimol Wun Maphrao On"
      },
      {
        "id": "939",
        "name": "Otop Product Center"
      },
      {
        "id": "940",
        "name": "Srifah Kanchanaburi"
      },
      {
        "id": "941",
        "name": "Kaew Souvenir"
      },
      {
        "id": "1790",
        "name": "ตลาดน้ำวัดสุวรรณบำรุงราชวราราม1"
      },
      {
        "id": "1792",
        "name": "ปทุมธานี"
      },
      {
        "id": "1794",
        "name": "About thai"
      },
      {
        "id": "1801",
        "name": "Wat Suwan"
      },
      {
        "id": "1802",
        "name": "วัด"
      },
      {
        "id": "1803",
        "name": "Passport"
      },
      {
        "id": "1804",
        "name": "วางแผนเที่ยว"
      },
      {
        "id": "1805",
        "name": "การเดินทางสู่ประเทศไทย"
      },
      {
        "id": "1806",
        "name": "Getting to Thailand"
      },
      {
        "id": "1807",
        "name": "FAQ"
      },
      {
        "id": "1810",
        "name": "china town"
      },
      {
        "id": "1822",
        "name": "Sakaerat Environmental Research Station"
      },
      {
        "id": "1823",
        "name": "สถานีวิจัยสิ่งแวดล้อมสะแกราช"
      },
      {
        "id": "1834",
        "name": "agricultural "
      },
      {
        "id": "1835",
        "name": "biodiversity conservation "
      },
      {
        "id": "1836",
        "name": "botanical"
      },
      {
        "id": "1837",
        "name": "glasshouse"
      },
      {
        "id": "1838",
        "name": "Lamtakhong Research Station"
      },
      {
        "id": "1839",
        "name": "การอนุรักษ์พันธุกรรมพืช และแมลง "
      },
      {
        "id": "1840",
        "name": "เทคโนโลยีการเกษตร"
      },
      {
        "id": "1841",
        "name": "นครราชสีมา"
      },
      {
        "id": "1842",
        "name": "ปากช่อง"
      },
      {
        "id": "1843",
        "name": "พรรณไม้"
      },
      {
        "id": "1844",
        "name": "พฤกษศาสตร์ "
      },
      {
        "id": "1845",
        "name": "สถานีวิจัยลำตะคอง"
      },
      {
        "id": "1889",
        "name": "grand palace"
      },
      {
        "id": "1890",
        "name": "patthalung"
      },
      {
        "id": "1925",
        "name": "บ้านนาตอง"
      },
      {
        "id": "2007",
        "name": "พิพิธภัณฑ์บ้านเทพ"
      },
      {
        "id": "2015",
        "name": "chumphon"
      },
      {
        "id": "2020",
        "name": "maesaimarket"
      },
      {
        "id": "2021",
        "name": "แม่สาย"
      },
      {
        "id": "2022",
        "name": "ทำกระดาษสา"
      },
      {
        "id": "2023",
        "name": "บ้านปางห้า"
      },
      {
        "id": "2024",
        "name": "ถนนคนม่วนเชียงราย"
      },
      {
        "id": "2025",
        "name": "เมืองเชียงราย"
      },
      {
        "id": "2043",
        "name": "amazing thailand"
      },
      {
        "id": "2044",
        "name": "Pathum Thani"
      },
      {
        "id": "2045",
        "name": "Samut Sakhon"
      },
      {
        "id": "2046",
        "name": "Samut Songkhram"
      },
      {
        "id": "2047",
        "name": "Ratchaburi"
      },
      {
        "id": "2048",
        "name": "Nonthaburi"
      },
      {
        "id": "2049",
        "name": "Nakhon Pathom"
      },
      {
        "id": "2050",
        "name": "Suphan Buri"
      },
      {
        "id": "2051",
        "name": "Ang Thong"
      },
      {
        "id": "2052",
        "name": "Chainat"
      },
      {
        "id": "2053",
        "name": "Sing Buri"
      },
      {
        "id": "2054",
        "name": "Lop Buri"
      },
      {
        "id": "2055",
        "name": "Saraburi"
      },
      {
        "id": "2056",
        "name": "Nakhon Nayok"
      },
      {
        "id": "2057",
        "name": "Ayutthaya"
      },
      {
        "id": "2060",
        "name": "Phayao"
      },
      {
        "id": "2061",
        "name": "Phrae"
      },
      {
        "id": "2062",
        "name": "Uttaradit"
      },
      {
        "id": "2063",
        "name": "nan province"
      },
      {
        "id": "2064",
        "name": "Phitsanulok"
      },
      {
        "id": "2065",
        "name": "Phichit"
      },
      {
        "id": "2066",
        "name": "Nakhon Sawan"
      },
      {
        "id": "2067",
        "name": "Uthai Thani"
      },
      {
        "id": "2068",
        "name": "Kamphaeng Phet"
      },
      {
        "id": "2069",
        "name": "Tak Province"
      },
      {
        "id": "2070",
        "name": "Lampang"
      },
      {
        "id": "2071",
        "name": "Lamphun"
      },
      {
        "id": "2072",
        "name": "Mae Hong Son"
      },
      {
        "id": "2073",
        "name": "Chachoengsao"
      },
      {
        "id": "2074",
        "name": "Prachin Buri"
      },
      {
        "id": "2075",
        "name": "Sa Kaeo"
      },
      {
        "id": "2076",
        "name": "Chanthaburi"
      },
      {
        "id": "2077",
        "name": "Rayong"
      },
      {
        "id": "2078",
        "name": "Samut Prakan"
      },
      {
        "id": "2084",
        "name": "wat pho"
      },
      {
        "id": "2085",
        "name": "wat arun"
      },
      {
        "id": "2086",
        "name": "thailand airport"
      },
      {
        "id": "2089",
        "name": "about thailand"
      },
      {
        "id": "2090",
        "name": "Tourism Authority of Thailand"
      },
      {
        "id": "2091",
        "name": "lumpini park"
      },
      {
        "id": "2092",
        "name": "Damnoen saduak"
      },
      {
        "id": "2093",
        "name": "Visit thailand"
      },
      {
        "id": "2094",
        "name": "Amphawa"
      },
      {
        "id": "2095",
        "name": "weather in thailand"
      },
      {
        "id": "2096",
        "name": "maeklong railway market"
      },
      {
        "id": "2097",
        "name": "thailand religion"
      },
      {
        "id": "2098",
        "name": "doi inthanon"
      },
      {
        "id": "2100",
        "name": "doi suthep"
      },
      {
        "id": "2101",
        "name": "jim thompson house"
      },
      {
        "id": "2102",
        "name": "erawan shrine"
      },
      {
        "id": "2103",
        "name": "wat saket"
      },
      {
        "id": "2104",
        "name": "railay beach"
      },
      {
        "id": "2105",
        "name": "attraction"
      },
      {
        "id": "2106",
        "name": "erawan museum"
      },
      {
        "id": "2107",
        "name": "lumphini park"
      },
      {
        "id": "2108",
        "name": "night market"
      },
      {
        "id": "2127",
        "name": "ก๋วยเตี๋ยวห้อยขาริมน่าน"
      },
      {
        "id": "2196",
        "name": "บ้านแม่พุงหลวง"
      },
      {
        "id": "2198",
        "name": "บ่อน้ำร้อนแม่จอก"
      },
      {
        "id": "2200",
        "name": "พระธาตุแหลมลี่"
      },
      {
        "id": "2202",
        "name": "สวนป่าสักรัฐบาลปลูกแห่งแรกในประเทศไทย"
      },
      {
        "id": "2204",
        "name": "วัดพระหลวง"
      },
      {
        "id": "2207",
        "name": "ม่อนเสาหินพิศวง"
      },
      {
        "id": "2208",
        "name": "ม่อนหินกอง"
      },
      {
        "id": "2209",
        "name": "NakhonSiThammarat"
      },
      {
        "id": "2211",
        "name": "SiSaKet"
      },
      {
        "id": "2212",
        "name": "surin"
      },
      {
        "id": "2217",
        "name": "พิพิธภัณฑ์รัชกาลที่ 6"
      },
      {
        "id": "2219",
        "name": "ศาลหลักเมือง กรุงเทพฯ"
      },
      {
        "id": "2220",
        "name": "วัดมหาธาตุ"
      },
      {
        "id": "2222",
        "name": "วัดราชบพิตร"
      },
      {
        "id": "2224",
        "name": "วัดราชประดิษฐ์"
      },
      {
        "id": "2226",
        "name": "สวนสันติชัยปราการ"
      },
      {
        "id": "2228",
        "name": "วัดราชนัดดา"
      },
      {
        "id": "2229",
        "name": "นิทรรศน์รัตนโกสินทร์"
      },
      {
        "id": "2231",
        "name": "พิพิธภัณฑ์ราชทัณฑ์"
      },
      {
        "id": "2233",
        "name": "วัดเลียบ"
      },
      {
        "id": "2234",
        "name": "วัดเบญจมบพิตร"
      },
      {
        "id": "2236",
        "name": "สัตว์น้ำ อควาเรียม น้ำจืด อุโมงค์ปลา "
      },
      {
        "id": "2239",
        "name": "ทุ่งกังหันลมห้วยบง"
      },
      {
        "id": "2240",
        "name": "ห้วยบง"
      },
      {
        "id": "2243",
        "name": "Ko Phayam"
      },
      {
        "id": "2244",
        "name": "เกาะพยาม"
      },
      {
        "id": "2247",
        "name": "Khao Fa Chi"
      },
      {
        "id": "2248",
        "name": "เขาฝาชี"
      },
      {
        "id": "2251",
        "name": "Namtok Choeng Thong"
      },
      {
        "id": "2252",
        "name": "น้ำตกเชิงทอง"
      },
      {
        "id": "2254",
        "name": "วัดป่าไม้แดง"
      },
      {
        "id": "2256",
        "name": "ศาลเจ้าโก้วเล้งจี"
      },
      {
        "id": "2258",
        "name": "virtual tour"
      },
      {
        "id": "2260",
        "name": "ฟาร์มจระเข้สมุทรปราการ"
      },
      {
        "id": "2262",
        "name": "ตลาดน้ำโบราณบางพลี"
      },
      {
        "id": "2264",
        "name": "สุ่มปลายักษ์"
      },
      {
        "id": "2267",
        "name": "อช.ภูเวียง"
      },
      {
        "id": "2268",
        "name": "อุทยานแห่งชาติภูเวียง"
      },
      {
        "id": "2270",
        "name": "ถ้ำพระ"
      },
      {
        "id": "2273",
        "name": "Wat Tham Pha Koeng"
      },
      {
        "id": "2274",
        "name": "วัดถ้ำผาเกิ้ง"
      },
      {
        "id": "2277",
        "name": "Wat Thung Setthi"
      },
      {
        "id": "2278",
        "name": "วัดทุ่งเศรษฐี"
      },
      {
        "id": "2280",
        "name": "วัดพระพุทธบาทภูพานคำ"
      },
      {
        "id": "2282",
        "name": "วัดป่าแสงอรุณ"
      },
      {
        "id": "2285",
        "name": "วัดโพธิ์ชัย"
      },
      {
        "id": "2286",
        "name": "หลวงพ่อพระใส"
      },
      {
        "id": "2288",
        "name": "ตลาดท่าเสด็จ"
      },
      {
        "id": "2290",
        "name": "วัดถ้ำดินเพียง "
      },
      {
        "id": "2292",
        "name": "พระธาตุบังพวน"
      },
      {
        "id": "2294",
        "name": "วัดหินหมากเป้ง "
      },
      {
        "id": "2296",
        "name": "พิพิธภัณฑ์สัตว์น้ำหนองคาย"
      },
      {
        "id": "2298",
        "name": "วัดผาตากเสื้อ"
      },
      {
        "id": "2300",
        "name": "ภูห้วยอีสัน"
      },
      {
        "id": "2302",
        "name": "วัดไทย หนองคาย"
      },
      {
        "id": "2304",
        "name": "สะพานไม้แกดำ"
      },
      {
        "id": "2306",
        "name": "บึงบอน"
      },
      {
        "id": "2308",
        "name": "บึงโขงหลง"
      },
      {
        "id": "2310",
        "name": "โครงการพัฒนาพื้นที่แก้มลิงหนองเจ็ดเส้น อันเนื่องมาจากพระราชดำริ"
      },
      {
        "id": "2312",
        "name": "พระบรมราชานุสาวรีย์สมเด็จพระนเรศวรมหาราช และสมเด็จพระเอกาทศรถ "
      },
      {
        "id": "2314",
        "name": "โฮมสเตย์ชมรมเพื่อนเกษตร"
      },
      {
        "id": "2316",
        "name": "โรงพยาบาลเรือ อ่างทอง"
      },
      {
        "id": "2318",
        "name": "ศาลเจ้าพ่อกวนอู"
      },
      {
        "id": "2320",
        "name": "พิพิธภัณฑ์เมืองแพร่คุ้มเจ้าหลวง"
      },
      {
        "id": "2322",
        "name": "นาโปแก"
      },
      {
        "id": "2327",
        "name": "whale hotel"
      },
      {
        "id": "2328",
        "name": "nakorn pathom"
      },
      {
        "id": "2343",
        "name": "satul"
      },
      {
        "id": "2344",
        "name": "satun"
      },
      {
        "id": "2345",
        "name": "satun geopark"
      },
      {
        "id": "2346",
        "name": "south"
      },
      {
        "id": "2347",
        "name": "southern"
      },
      {
        "id": "2348",
        "name": "Tham"
      },
      {
        "id": "2349",
        "name": "เขา"
      },
      {
        "id": "2350",
        "name": "เขาทะนาน"
      },
      {
        "id": "2351",
        "name": "ซากดึกดำบรรพ์"
      },
      {
        "id": "2352",
        "name": "ดึกดำบรรพ์"
      },
      {
        "id": "2353",
        "name": "ใต้"
      },
      {
        "id": "2354",
        "name": "ถ้ำ"
      },
      {
        "id": "2355",
        "name": "ทะนาน"
      },
      {
        "id": "2356",
        "name": "ธรณีวิทยา"
      },
      {
        "id": "2357",
        "name": "ภาคใต้"
      },
      {
        "id": "2358",
        "name": "สตูล"
      },
      {
        "id": "2365",
        "name": " National Park"
      },
      {
        "id": "2366",
        "name": "Mu Ko Phetra "
      },
      {
        "id": "2367",
        "name": "Mu Ko Phetra National Park"
      },
      {
        "id": "2368",
        "name": "ทะเล"
      },
      {
        "id": "2369",
        "name": "หมู่เกาะเภตรา"
      },
      {
        "id": "2370",
        "name": "อุทยาน"
      },
      {
        "id": "2371",
        "name": "อุทยานแห่งชาติ"
      },
      {
        "id": "2372",
        "name": "อุทยานแห่งชาติหมู่เกาะเภตรา"
      },
      {
        "id": "2384",
        "name": "Ko Khao Yai"
      },
      {
        "id": "2385",
        "name": "Pan Yot "
      },
      {
        "id": "2386",
        "name": "Prasat Hin "
      },
      {
        "id": "2387",
        "name": "Prasat Hin Pan Yot "
      },
      {
        "id": "2388",
        "name": "เกาะ"
      },
      {
        "id": "2389",
        "name": "เขาหินปูน"
      },
      {
        "id": "2390",
        "name": "ทะล"
      },
      {
        "id": "2391",
        "name": "ปราสาทหิน"
      },
      {
        "id": "2392",
        "name": "ปราสาทหินพันยอด"
      },
      {
        "id": "2399",
        "name": "Kuden "
      },
      {
        "id": "2400",
        "name": "Kuden Mansion"
      },
      {
        "id": "2401",
        "name": "Satun National Museum"
      },
      {
        "id": "2402",
        "name": "กูเด็ง"
      },
      {
        "id": "2403",
        "name": "ประวัติศาสตร์"
      },
      {
        "id": "2404",
        "name": "พิพิธภัณฑ์"
      },
      {
        "id": "2405",
        "name": "พิพิธภัณฑสถานแห่งชาติ"
      },
      {
        "id": "2406",
        "name": "วัฒนธรรม"
      },
      {
        "id": "2411",
        "name": "ชุมพร"
      },
      {
        "id": "2412",
        "name": "วัดบรมธาตุสวี"
      },
      {
        "id": "2413",
        "name": "วัดพระบรมธาตุสวี"
      },
      {
        "id": "2414",
        "name": "สวี"
      },
      {
        "id": "2423",
        "name": "dive"
      },
      {
        "id": "2425",
        "name": "Ko Ran Kai "
      },
      {
        "id": "2426",
        "name": "Ko Ran Pet  "
      },
      {
        "id": "2427",
        "name": "เกาะร้านไก่"
      },
      {
        "id": "2428",
        "name": "เกาะร้านเป็ด"
      },
      {
        "id": "2429",
        "name": "ดำน้ำ"
      },
      {
        "id": "2435",
        "name": "Khao Din Sor"
      },
      {
        "id": "2436",
        "name": "เขาดินสอ"
      },
      {
        "id": "2437",
        "name": "ปะทิว"
      },
      {
        "id": "2438",
        "name": "เหยี่ยว"
      },
      {
        "id": "2447",
        "name": "moutain"
      },
      {
        "id": "2448",
        "name": "Phato "
      },
      {
        "id": "2449",
        "name": "Por Ta Mangkre Summit"
      },
      {
        "id": "2450",
        "name": "เดินป่า"
      },
      {
        "id": "2451",
        "name": "เที่ยว"
      },
      {
        "id": "2452",
        "name": "ผจญภัย"
      },
      {
        "id": "2453",
        "name": "พ่อตามังเคร"
      },
      {
        "id": "2454",
        "name": "พะโต๊ะ"
      },
      {
        "id": "2455",
        "name": "ยอดเขาพ่อตามังเคร"
      },
      {
        "id": "2458",
        "name": "Pranburi"
      },
      {
        "id": "2459",
        "name": "PrachuapKhiriKhan"
      },
      {
        "id": "2460",
        "name": "UdomPochana"
      },
      {
        "id": "2462",
        "name": "KannikaBaansuan"
      },
      {
        "id": "2467",
        "name": "JekPiek"
      },
      {
        "id": "2468",
        "name": "Food"
      },
      {
        "id": "2473",
        "name": "Phu Pha Petch"
      },
      {
        "id": "2474",
        "name": "ภูผาเพชร"
      },
      {
        "id": "2475",
        "name": "อุทยานธรณี"
      },
      {
        "id": "2477",
        "name": "กูเด็น"
      },
      {
        "id": "2484",
        "name": "Kanomwan"
      },
      {
        "id": "2487",
        "name": "GoRotiChaChak"
      },
      {
        "id": "2490",
        "name": "BaanKroodBeach"
      },
      {
        "id": "2491",
        "name": "PlatooSeaFood"
      },
      {
        "id": "2493",
        "name": "TheBaguetteHuaHin"
      },
      {
        "id": "2495",
        "name": "KhunMhamSouvenir"
      },
      {
        "id": "2508",
        "name": " Phanam"
      },
      {
        "id": "2510",
        "name": "Pha nam"
      },
      {
        "id": "2511",
        "name": "Wat "
      },
      {
        "id": "2512",
        "name": "Wat Phra Phuttabatt"
      },
      {
        "id": "2513",
        "name": "Wat Phra Phuttabatt Phanam"
      },
      {
        "id": "2514",
        "name": "ผาหนาม"
      },
      {
        "id": "2515",
        "name": "ลำพูน"
      },
      {
        "id": "2516",
        "name": "ลี้ "
      },
      {
        "id": "2517",
        "name": "วัดพระพุทธบาท"
      },
      {
        "id": "2518",
        "name": "วัดพระพุทธบาทผาหนาม"
      },
      {
        "id": "2522",
        "name": "PetcharatSouvenirShop"
      },
      {
        "id": "2524",
        "name": "OTOPCenter"
      },
      {
        "id": "2528",
        "name": "PrachuapKhiriKha"
      },
      {
        "id": "2529",
        "name": "DhevanDaraResort&Spa"
      },
      {
        "id": "2532",
        "name": "BaanTalayDaoResort"
      },
      {
        "id": "2536",
        "name": "MueangChumphon"
      },
      {
        "id": "2537",
        "name": "OceanShoppingMall"
      },
      {
        "id": "2539",
        "name": "ThaSae"
      },
      {
        "id": "2540",
        "name": "SouvenirShopsAtPorTaHinChangShrine"
      },
      {
        "id": "2542",
        "name": "KluaiBaanKongShop"
      },
      {
        "id": "2544",
        "name": "ChumphonFreshMarket"
      },
      {
        "id": "2545",
        "name": "ChumphonNightMarket"
      },
      {
        "id": "2548",
        "name": "YenYenDessert"
      },
      {
        "id": "2552",
        "name": "Thamsing Cafe"
      },
      {
        "id": "2555",
        "name": "ChokdeeTaeTiam"
      },
      {
        "id": "2556",
        "name": "LocalFood"
      },
      {
        "id": "2559",
        "name": "TheSnowcapBingsoo"
      },
      {
        "id": "2560",
        "name": "Cafes"
      },
      {
        "id": "2562",
        "name": "OldTimeCafe"
      },
      {
        "id": "2564",
        "name": "GreenKitchen"
      },
      {
        "id": "2566",
        "name": "KhunJazzSomTum"
      },
      {
        "id": "2568",
        "name": "JeSimNoodlesGravy"
      },
      {
        "id": "2570",
        "name": "Farida Halal Food "
      },
      {
        "id": "2573",
        "name": "RueankeanglaySeafood"
      },
      {
        "id": "2575",
        "name": "YayPoud"
      },
      {
        "id": "2577",
        "name": "WoonkhundaShop"
      },
      {
        "id": "2579",
        "name": "BaanNamphrikKaosauy"
      },
      {
        "id": "2581",
        "name": "MueangChanthaburi"
      },
      {
        "id": "2582",
        "name": "PuJaaThaChalab"
      },
      {
        "id": "2583",
        "name": "RecommendRestaurants"
      },
      {
        "id": "2585",
        "name": "MuangChanthaburi"
      },
      {
        "id": "2586",
        "name": "TaladLangWatRoman"
      },
      {
        "id": "2589",
        "name": "ThaMai"
      },
      {
        "id": "2590",
        "name": "Maelamom"
      },
      {
        "id": "2592",
        "name": "ArArSouvenirShops "
      },
      {
        "id": "2596",
        "name": "SametNgamOTOPVillage"
      },
      {
        "id": "2597",
        "name": "Souvenir andHandmade"
      },
      {
        "id": "2600",
        "name": "RobinsonLifestyleChanthaburi"
      },
      {
        "id": "2601",
        "name": "Apparel"
      },
      {
        "id": "2603",
        "name": "TonTumrubSouvenirShop "
      },
      {
        "id": "2605",
        "name": "NongbuaWalkingStreet"
      },
      {
        "id": "2607",
        "name": "SalondeKalim"
      },
      {
        "id": "2610",
        "name": "SamedDang"
      },
      {
        "id": "2612",
        "name": "LaemSing"
      },
      {
        "id": "2614",
        "name": "Chanthornrestaurant"
      },
      {
        "id": "2616",
        "name": "RueanRimNamSeafood"
      },
      {
        "id": "2618",
        "name": "MililinCaféandEatery"
      },
      {
        "id": "2620",
        "name": "KaysEspressoBar"
      },
      {
        "id": "2622",
        "name": "JePenYentafo"
      },
      {
        "id": "2624",
        "name": "LeduChan"
      },
      {
        "id": "2628",
        "name": "ShangriLaHotelChiangMai"
      },
      {
        "id": "2629",
        "name": "HotelinChiangMai"
      },
      {
        "id": "2630",
        "name": "ChiangMai"
      },
      {
        "id": "2633",
        "name": "HolidayGardenHotelandResortChiangMai"
      },
      {
        "id": "2636",
        "name": "RatiLannaRiversideSpaResort"
      },
      {
        "id": "2639",
        "name": "ChiangmaiGrandviewHotel"
      },
      {
        "id": "2642",
        "name": "UNimmanChiangMai"
      },
      {
        "id": "2646",
        "name": "HotelinChiangRai"
      },
      {
        "id": "2650",
        "name": "TheRiveriebyKatathaniChiangRai"
      },
      {
        "id": "2653",
        "name": "TheHeritageChiangRai"
      },
      {
        "id": "2656",
        "name": "MoraBoutiqueHotel"
      },
      {
        "id": "2661",
        "name": "DusitTalaiResort"
      },
      {
        "id": "2664",
        "name": "HotelTogether"
      },
      {
        "id": "2666",
        "name": "NipaKunchiang"
      },
      {
        "id": "2668",
        "name": "JaeKeng"
      },
      {
        "id": "2670",
        "name": "KhaoYaiFruitMarketCenter"
      },
      {
        "id": "2672",
        "name": "ChokchaiFarmSouvenirShop"
      },
      {
        "id": "2674",
        "name": "SuwanFarm"
      },
      {
        "id": "2680",
        "name": "ChiasFarmSouvenirs"
      },
      {
        "id": "2681",
        "name": "DairyHomeRestaurant"
      },
      {
        "id": "2683",
        "name": "BaanKanomJeenPakchong"
      },
      {
        "id": "2685",
        "name": "Prime19Khaoyai"
      },
      {
        "id": "2689",
        "name": "ThaiGardenRessort"
      },
      {
        "id": "2691",
        "name": "SiamBayshoreResort"
      },
      {
        "id": "2693",
        "name": "KeawWanDishKhaoYai"
      },
      {
        "id": "2695",
        "name": "LaabSomjit"
      },
      {
        "id": "2697",
        "name": "KhruaNanNam"
      },
      {
        "id": "2699",
        "name": "MaeNiyom"
      },
      {
        "id": "2701",
        "name": "BarITim"
      },
      {
        "id": "2704",
        "name": "Sriracha"
      },
      {
        "id": "2705",
        "name": "MaeKimBuai"
      },
      {
        "id": "2707",
        "name": "LookkaiKhaoyai"
      },
      {
        "id": "2709",
        "name": "BuaTong"
      },
      {
        "id": "2710",
        "name": "BanmaiChayNam"
      },
      {
        "id": "2712",
        "name": "NongMonMarket"
      },
      {
        "id": "2713",
        "name": "CharinNongMon"
      },
      {
        "id": "2716",
        "name": "Pattaya"
      },
      {
        "id": "2717",
        "name": "TheChocolatFactoryPattaya"
      },
      {
        "id": "2719",
        "name": "MaefaiPlaPhow"
      },
      {
        "id": "2721",
        "name": "Banglamung"
      },
      {
        "id": "2722",
        "name": "SeallyKitchen"
      },
      {
        "id": "2724",
        "name": "KhaoSamsi"
      },
      {
        "id": "2726",
        "name": "KyungBokKung"
      },
      {
        "id": "2728",
        "name": "RibsMannn"
      },
      {
        "id": "2730",
        "name": "PaPrapaiRestaurant"
      },
      {
        "id": "2732",
        "name": "ThongBuak"
      },
      {
        "id": "2734",
        "name": "PupenSeafood"
      },
      {
        "id": "2735",
        "name": "HopsBrewHouse"
      },
      {
        "id": "2737",
        "name": "Vano'sSteak"
      },
      {
        "id": "2739",
        "name": "PiromCafe"
      },
      {
        "id": "2741",
        "name": "SkoopBeachCafe"
      },
      {
        "id": "2743",
        "name": "TheSkyGallery"
      },
      {
        "id": "2745",
        "name": "RainForestCafePattaya"
      },
      {
        "id": "2748",
        "name": "BanPanladaPastry"
      },
      {
        "id": "2751",
        "name": "JomTien"
      },
      {
        "id": "2752",
        "name": "Lung Sawai"
      },
      {
        "id": "2759",
        "name": "psipanwaphukeet"
      },
      {
        "id": "2760",
        "name": "luxury "
      },
      {
        "id": "2761",
        "name": "instatravel"
      },
      {
        "id": "2762",
        "name": "boutiquehotel"
      },
      {
        "id": "2763",
        "name": "hotels"
      },
      {
        "id": "2779",
        "name": "Baba Beach Club Natai Luxury Pool Villa Hotel by Sri panwa"
      },
      {
        "id": "2781",
        "name": "Club"
      },
      {
        "id": "2782",
        "name": "Natai"
      },
      {
        "id": "2783",
        "name": "Pool"
      },
      {
        "id": "2784",
        "name": "villa"
      },
      {
        "id": "2785",
        "name": "Sri panwa"
      },
      {
        "id": "2786",
        "name": "Baba Beach Club"
      },
      {
        "id": "2787",
        "name": "Baba Beach"
      },
      {
        "id": "2788",
        "name": "Beach Club"
      },
      {
        "id": "2789",
        "name": "bababeachclubnatai"
      },
      {
        "id": "2790",
        "name": "bababeachclubphuket"
      },
      {
        "id": "2791",
        "name": "phuketparty"
      },
      {
        "id": "2792",
        "name": "beachbar"
      },
      {
        "id": "2807",
        "name": "BABA POOLCLUB"
      },
      {
        "id": "2808",
        "name": "Poolclub"
      },
      {
        "id": "2809",
        "name": "restaurants"
      },
      {
        "id": "2810",
        "name": " INTERNATIONAL CUISINE"
      },
      {
        "id": "2811",
        "name": "Sripanwa"
      },
      {
        "id": "2812",
        "name": " Pool Bar"
      },
      {
        "id": "2813",
        "name": "BABAQ"
      },
      {
        "id": "2814",
        "name": "bababq"
      },
      {
        "id": "2815",
        "name": "Dining"
      },
      {
        "id": "2816",
        "name": " chilling "
      },
      {
        "id": "2817",
        "name": " cocktails"
      },
      {
        "id": "2818",
        "name": "recommended"
      },
      {
        "id": "2819",
        "name": "indoor"
      },
      {
        "id": "2820",
        "name": "outdoor"
      },
      {
        "id": "2821",
        "name": "private"
      },
      {
        "id": "2822",
        "name": "sea"
      },
      {
        "id": "2826",
        "name": "BABA SOUL FOOD"
      },
      {
        "id": "2827",
        "name": "Pool Bar"
      },
      {
        "id": "2828",
        "name": "chilling"
      },
      {
        "id": "2829",
        "name": "cocktails"
      },
      {
        "id": "2848",
        "name": "BABANEST"
      },
      {
        "id": "2849",
        "name": "BABA NEST"
      },
      {
        "id": "2850",
        "name": "Mexican"
      },
      {
        "id": "2851",
        "name": "Andaman Sea"
      },
      {
        "id": "2852",
        "name": "EXCLUSIVE ROOFTOP BAR"
      },
      {
        "id": "2853",
        "name": "Mexican Tapas"
      },
      {
        "id": "2865",
        "name": "BABA IKI – JAPANESE CUISINE"
      },
      {
        "id": "2866",
        "name": "BABA IKI"
      },
      {
        "id": "2867",
        "name": "JAPANESE "
      },
      {
        "id": "2868",
        "name": "CUISINE"
      },
      {
        "id": "2869",
        "name": "JAPANESE CUISINE"
      },
      {
        "id": "2870",
        "name": "BABAIKI"
      },
      {
        "id": "2871",
        "name": "Japan"
      },
      {
        "id": "2872",
        "name": "Omakase"
      },
      {
        "id": "2873",
        "name": "drink"
      },
      {
        "id": "2874",
        "name": "lunch"
      },
      {
        "id": "2875",
        "name": "Dinner"
      },
      {
        "id": "2877",
        "name": "KongSouvenirShop"
      },
      {
        "id": "2889",
        "name": "BABA CHINO"
      },
      {
        "id": "2890",
        "name": "CHINO"
      },
      {
        "id": "2891",
        "name": "Chinese"
      },
      {
        "id": "2892",
        "name": "Guangdong "
      },
      {
        "id": "2894",
        "name": "PassioneShopping Destination"
      },
      {
        "id": "2895",
        "name": "Cloth"
      },
      {
        "id": "2897",
        "name": "ChokChaiSouvenir"
      },
      {
        "id": "2906",
        "name": "pattaya travel agent "
      },
      {
        "id": "2912",
        "name": "BBQ"
      },
      {
        "id": "2913",
        "name": "dance "
      },
      {
        "id": "2914",
        "name": "Relax "
      },
      {
        "id": "2915",
        "name": "family"
      },
      {
        "id": "2916",
        "name": "meal "
      },
      {
        "id": "2917",
        "name": "ocean"
      },
      {
        "id": "2918",
        "name": " Thai and International cuisine"
      },
      {
        "id": "2935",
        "name": "BABA 88 PUB & NIGHTLIFE"
      },
      {
        "id": "2936",
        "name": "NIGHTLIFE"
      },
      {
        "id": "2937",
        "name": "PUB "
      },
      {
        "id": "2938",
        "name": "BABA 88"
      },
      {
        "id": "2940",
        "name": "bar"
      },
      {
        "id": "2941",
        "name": "disco"
      },
      {
        "id": "2942",
        "name": "DJ"
      },
      {
        "id": "2943",
        "name": "Party"
      },
      {
        "id": "2944",
        "name": "partying"
      },
      {
        "id": "2945",
        "name": "chill"
      },
      {
        "id": "2950",
        "name": "hiphop"
      },
      {
        "id": "2952",
        "name": "music"
      },
      {
        "id": "2972",
        "name": "BABA HOTPOT"
      },
      {
        "id": "2973",
        "name": "HOTPOT"
      },
      {
        "id": "2974",
        "name": "Hot pot"
      },
      {
        "id": "2975",
        "name": "ingredients "
      },
      {
        "id": "2976",
        "name": " sliced meat"
      },
      {
        "id": "2977",
        "name": "meat"
      },
      {
        "id": "2978",
        "name": "mushrooms"
      },
      {
        "id": "2979",
        "name": "leafy vegetables"
      },
      {
        "id": "2980",
        "name": "vegetables"
      },
      {
        "id": "2981",
        "name": "wontons"
      },
      {
        "id": "2983",
        "name": "evenings"
      },
      {
        "id": "2984",
        "name": "Order "
      },
      {
        "id": "2985",
        "name": "soup"
      },
      {
        "id": "2987",
        "name": "LOUNGE"
      },
      {
        "id": "2988",
        "name": "oasis "
      },
      {
        "id": "2989",
        "name": "Habita"
      },
      {
        "id": "2990",
        "name": "exclusive "
      },
      {
        "id": "2991",
        "name": "Sunset Lounge"
      },
      {
        "id": "2992",
        "name": " wine bar"
      },
      {
        "id": "2993",
        "name": "wine "
      },
      {
        "id": "2994",
        "name": "viewpoint "
      },
      {
        "id": "2995",
        "name": "delicious "
      },
      {
        "id": "2996",
        "name": "enjoy "
      },
      {
        "id": "2997",
        "name": "Shi Shi Sunset Lounge"
      },
      {
        "id": "2998",
        "name": "hangout "
      },
      {
        "id": "2999",
        "name": "end the day"
      },
      {
        "id": "3018",
        "name": " COOL SPA"
      },
      {
        "id": "3019",
        "name": "Cool Spa Phuket"
      },
      {
        "id": "3020",
        "name": "Top 10 luxury Spa"
      },
      {
        "id": "3021",
        "name": "Top 10"
      },
      {
        "id": "3022",
        "name": "Luxury Spa"
      },
      {
        "id": "3023",
        "name": "Andaman "
      },
      {
        "id": "3024",
        "name": "services "
      },
      {
        "id": "3025",
        "name": "treatment "
      },
      {
        "id": "3026",
        "name": "extremely spacious treatment rooms"
      },
      {
        "id": "3027",
        "name": "private salon"
      },
      {
        "id": "3028",
        "name": "salon"
      },
      {
        "id": "3029",
        "name": "panwa"
      },
      {
        "id": "3040",
        "name": "BABA BEACH BAR – BEACH BAR NATAI"
      },
      {
        "id": "3041",
        "name": "BABA BEACH BAR"
      },
      {
        "id": "3042",
        "name": "BEACH BAR NATAI"
      },
      {
        "id": "3043",
        "name": "BABA BEACH CLUB NATAI"
      },
      {
        "id": "3044",
        "name": "entertainment "
      },
      {
        "id": "3045",
        "name": "Natai Beach"
      },
      {
        "id": "3046",
        "name": "fresco bar"
      },
      {
        "id": "3048",
        "name": "BaanPooPen"
      },
      {
        "id": "3049",
        "name": "sripanwa phuket"
      },
      {
        "id": "3052",
        "name": "MarquiseBoutiqueHotel"
      },
      {
        "id": "3058",
        "name": "PaYaSeafood"
      },
      {
        "id": "3060",
        "name": "DEEKAFÉ"
      },
      {
        "id": "3062",
        "name": "LaemChareonSeafood"
      },
      {
        "id": "3064",
        "name": "Muang"
      },
      {
        "id": "3065",
        "name": "Choey"
      },
      {
        "id": "3067",
        "name": "Muang Rayong"
      },
      {
        "id": "3068",
        "name": "Café Kantary by the Sea"
      },
      {
        "id": "3070",
        "name": "RayongBoatNoodle"
      },
      {
        "id": "3071",
        "name": "PuenIsan"
      },
      {
        "id": "3073",
        "name": "The Bizarre Island"
      },
      {
        "id": "3075",
        "name": "TerraCotta"
      },
      {
        "id": "3077",
        "name": "Lighthouse Organic Cafe"
      },
      {
        "id": "3079",
        "name": "PorKaengPa"
      },
      {
        "id": "3082",
        "name": "NikhomPhatthana"
      },
      {
        "id": "3083",
        "name": "The Creeper House"
      },
      {
        "id": "3085",
        "name": "Mocha"
      },
      {
        "id": "3087",
        "name": "Yindee Seafood"
      },
      {
        "id": "3089",
        "name": "RayongCoffee"
      },
      {
        "id": "3092",
        "name": "D Varee Diva Central Rayong"
      },
      {
        "id": "3094",
        "name": "Starconventionhotel"
      },
      {
        "id": "3097",
        "name": "NovotelRayongRimPaeResort"
      },
      {
        "id": "3104",
        "name": "ดูดาว"
      },
      {
        "id": "3105",
        "name": "ท่องเที่ยว"
      },
      {
        "id": "3106",
        "name": "ท้องฟ้าจำลอง"
      },
      {
        "id": "3107",
        "name": "เมืองสงขลา"
      },
      {
        "id": "3108",
        "name": "สงขลา"
      },
      {
        "id": "3109",
        "name": "หอดูดาว"
      },
      {
        "id": "3110",
        "name": "อำเภอเมืองสงขลา"
      },
      {
        "id": "3114",
        "name": "Patong"
      },
      {
        "id": "3115",
        "name": "Accommodation"
      },
      {
        "id": "3116",
        "name": "Banquet "
      },
      {
        "id": "3123",
        "name": "กะเหรี่ยง"
      },
      {
        "id": "3124",
        "name": "ไทยใหญ่"
      },
      {
        "id": "3125",
        "name": "นวัตวิถี"
      },
      {
        "id": "3126",
        "name": "ป่าปุ๊"
      },
      {
        "id": "3127",
        "name": "แม่ฮ่องสอน"
      },
      {
        "id": "3128",
        "name": "โอทอป"
      },
      {
        "id": "3131",
        "name": "ถ้ำลอด"
      },
      {
        "id": "3132",
        "name": "ปางมะผ้า"
      },
      {
        "id": "3137",
        "name": "ขุนยวม"
      },
      {
        "id": "3138",
        "name": "บ้านต่อแพ"
      },
      {
        "id": "3139",
        "name": "ภาคเหนือ"
      },
      {
        "id": "3140",
        "name": "แม่เงา"
      },
      {
        "id": "3142",
        "name": "บ้านละอูบ"
      },
      {
        "id": "3144",
        "name": "แม่เหาะ "
      },
      {
        "id": "3155",
        "name": "baba"
      },
      {
        "id": "3156",
        "name": "bababeach"
      },
      {
        "id": "3157",
        "name": "bababeachclub"
      },
      {
        "id": "3158",
        "name": "Baba Beach Club Hua Hin Cha Am Luxury Pool Villa Hotel by Sri Panwa"
      },
      {
        "id": "3159",
        "name": "Baba Beach Club Hua Hin"
      },
      {
        "id": "3160",
        "name": "Cha Am"
      },
      {
        "id": "3161",
        "name": "Pool Villa"
      },
      {
        "id": "3162",
        "name": "sunrice"
      },
      {
        "id": "3163",
        "name": "Luxury pool villa"
      },
      {
        "id": "3164",
        "name": "BABA HOT BOX"
      },
      {
        "id": "3165",
        "name": "HOT BOX"
      },
      {
        "id": "3166",
        "name": "Grill "
      },
      {
        "id": "3167",
        "name": "taste "
      },
      {
        "id": "3168",
        "name": "sauces "
      },
      {
        "id": "3169",
        "name": "sides"
      },
      {
        "id": "3170",
        "name": "premium "
      },
      {
        "id": "3171",
        "name": "premium meat"
      },
      {
        "id": "3172",
        "name": "sri pan wa"
      },
      {
        "id": "3187",
        "name": "BAAN CHOK BEACHFRONT CAFÉ & EATERY, EVENT & FUNCTION SPACE IN HUA HIN"
      },
      {
        "id": "3188",
        "name": "BAAN CHOK"
      },
      {
        "id": "3189",
        "name": "BEACHFRONT "
      },
      {
        "id": "3190",
        "name": "EVENT "
      },
      {
        "id": "3191",
        "name": "FUNCTION SPACE"
      },
      {
        "id": "3192",
        "name": "meeting "
      },
      {
        "id": "3193",
        "name": "classic teas"
      },
      {
        "id": "3194",
        "name": "teas"
      },
      {
        "id": "3195",
        "name": "tea"
      },
      {
        "id": "3196",
        "name": "stylish coffee"
      },
      {
        "id": "3197",
        "name": "desserts"
      },
      {
        "id": "3198",
        "name": "International and Thai cuisine"
      },
      {
        "id": "3200",
        "name": "Wedding Thailand, Bröllop Thailand"
      },
      {
        "id": "3212",
        "name": "Destination "
      },
      {
        "id": "3213",
        "name": "Luxury Resort"
      },
      {
        "id": "3214",
        "name": "body "
      },
      {
        "id": "3215",
        "name": "Cool "
      },
      {
        "id": "3216",
        "name": "waterfall"
      },
      {
        "id": "3217",
        "name": "yoga "
      },
      {
        "id": "3237",
        "name": "Neo-Colonial"
      },
      {
        "id": "3238",
        "name": "BABA BEACH RESTAURANT – BEACH RESTAURANT NATAI"
      },
      {
        "id": "3239",
        "name": "BABA BEACH RESTAURANT"
      },
      {
        "id": "3240",
        "name": "ฺBaba beach club"
      },
      {
        "id": "3241",
        "name": "modern tropical"
      },
      {
        "id": "3242",
        "name": "Chino Portuguese style"
      },
      {
        "id": "3244",
        "name": "reflects "
      },
      {
        "id": "3245",
        "name": "views "
      },
      {
        "id": "3246",
        "name": "view"
      },
      {
        "id": "3247",
        "name": "Andaman coast"
      },
      {
        "id": "3248",
        "name": "guests "
      },
      {
        "id": "3249",
        "name": "fine dining"
      },
      {
        "id": "3250",
        "name": "social "
      },
      {
        "id": "3251",
        "name": "culinary luxury"
      },
      {
        "id": "3252",
        "name": "international "
      },
      {
        "id": "3253",
        "name": "international restaurant"
      },
      {
        "id": "3254",
        "name": "events "
      },
      {
        "id": "3255",
        "name": "playlists "
      },
      {
        "id": "3256",
        "name": "delectable"
      },
      {
        "id": "3259",
        "name": "yasothon"
      },
      {
        "id": "3260",
        "name": "พิพิธภัณฑ์พญาคันคาก"
      },
      {
        "id": "3261",
        "name": "ยโสธร"
      },
      {
        "id": "3266",
        "name": "กำแพงเพชร"
      },
      {
        "id": "3267",
        "name": "จุดชมวิว"
      },
      {
        "id": "3268",
        "name": "แม่วงก์"
      },
      {
        "id": "3269",
        "name": "โมโกจู"
      },
      {
        "id": "3270",
        "name": "ยอดเขา"
      },
      {
        "id": "3277",
        "name": "#pannaraihotel "
      },
      {
        "id": "3278",
        "name": "#pannarai"
      },
      {
        "id": "3279",
        "name": "#hotelbangkok"
      },
      {
        "id": "3280",
        "name": "#victorymonument"
      },
      {
        "id": "3281",
        "name": "#rangnam"
      },
      {
        "id": "3282",
        "name": "#ratchaprarop"
      },
      {
        "id": "3297",
        "name": "โคกหนองนาโมเดล"
      },
      {
        "id": "3298",
        "name": "ปาย"
      },
      {
        "id": "3299",
        "name": "แม่ฮี้"
      },
      {
        "id": "3304",
        "name": "tourfahsai"
      },
      {
        "id": "3305",
        "name": "Travel"
      },
      {
        "id": "3306",
        "name": "indian"
      },
      {
        "id": "3308",
        "name": "insta"
      },
      {
        "id": "3309",
        "name": "facebook"
      },
      {
        "id": "3310",
        "name": "thailandtour"
      },
      {
        "id": "3311",
        "name": "3n4d"
      },
      {
        "id": "3312",
        "name": "3nights4days"
      },
      {
        "id": "3313",
        "name": "chongburi"
      },
      {
        "id": "3318",
        "name": "Accommodation booking"
      },
      {
        "id": "3319",
        "name": "private taxi service"
      },
      {
        "id": "3320",
        "name": "show tickets"
      },
      {
        "id": "3321",
        "name": "long tail boats"
      },
      {
        "id": "3322",
        "name": "speed boats"
      },
      {
        "id": "3323",
        "name": "travel tickets"
      },
      {
        "id": "3324",
        "name": "yachts"
      },
      {
        "id": "3325",
        "name": "Emporium Suites by Chatrium | Bangkok 5 Star Hotel"
      },
      {
        "id": "3328",
        "name": "Maitria Hotel Sukhumvit 18 "
      },
      {
        "id": "3329",
        "name": "Hotel in Sukhumvit"
      },
      {
        "id": "3332",
        "name": "Chatrium Hotel Riverside "
      },
      {
        "id": "3333",
        "name": "5 Star Hotel Bangkok"
      },
      {
        "id": "3335",
        "name": "Emporium Suites by Chatrium "
      },
      {
        "id": "3336",
        "name": "Bangkok 5 Star Hotel"
      },
      {
        "id": "3339",
        "name": "Chatrium Golf Resort Soi Dao "
      },
      {
        "id": "3340",
        "name": "Chanthaburi Hotel"
      },
      {
        "id": "3343",
        "name": "Maitria Hotel Rama 9 Bangkok"
      },
      {
        "id": "3344",
        "name": "Hotel in Bangkok Thailand"
      },
      {
        "id": "3347",
        "name": "Chatrium Residence Sathon "
      },
      {
        "id": "3348",
        "name": "Hotel in Bangkok"
      },
      {
        "id": "3352",
        "name": "Albricias Restaurant at Chatrium Sathon "
      },
      {
        "id": "3353",
        "name": "Restaurants in Sathorn "
      },
      {
        "id": "3356",
        "name": "Flow Oasis Lounge at Chatrium Sathon "
      },
      {
        "id": "3357",
        "name": "Pool Lounge Bangkok "
      },
      {
        "id": "3358",
        "name": "Maitria Mode Sukhumvit 15 Bangkok"
      },
      {
        "id": "3362",
        "name": "zenvillakhaoyai"
      },
      {
        "id": "3363",
        "name": "hotelkhaoyai"
      },
      {
        "id": "3364",
        "name": "khaoyai"
      },
      {
        "id": "3370",
        "name": "beachfrontprivatevilla"
      },
      {
        "id": "3371",
        "name": "Phuketluxuryvilla"
      },
      {
        "id": "3372",
        "name": "priviateswimmingpool"
      },
      {
        "id": "3373",
        "name": "familystyle"
      },
      {
        "id": "3375",
        "name": "#seekyourpassionbyspeedy"
      },
      {
        "id": "3378",
        "name": "5-star hotel on Karon Beach"
      },
      {
        "id": "3379",
        "name": "Family friendly resort "
      },
      {
        "id": "3380",
        "name": "food app"
      },
      {
        "id": "3381",
        "name": "travel app"
      },
      {
        "id": "3382",
        "name": "mobile app"
      },
      {
        "id": "3383",
        "name": "FUEL YOUR SOUL WITH TRAVEL"
      },
      {
        "id": "3387",
        "name": "ขนอม"
      },
      {
        "id": "3388",
        "name": "หมู่เกาะทะเลใต้"
      },
      {
        "id": "3389",
        "name": "หาดขนอม"
      },
      {
        "id": "3395",
        "name": "Khiriwong"
      },
      {
        "id": "3396",
        "name": "lanska"
      },
      {
        "id": "3397",
        "name": "nakhon"
      },
      {
        "id": "3398",
        "name": "คีรีวง"
      },
      {
        "id": "3399",
        "name": "นคร"
      },
      {
        "id": "3400",
        "name": "นครศรีธรรมราช"
      },
      {
        "id": "3401",
        "name": "ลานสกา"
      },
      {
        "id": "3402",
        "name": "Aqytra"
      },
      {
        "id": "3403",
        "name": "Luxury Travel"
      },
      {
        "id": "3404",
        "name": "Mobile application"
      },
      {
        "id": "3405",
        "name": "Thaitravel"
      },
      {
        "id": "3407",
        "name": "#AnantaraLayan #AnantaraHotels #MinorHotels #Phuket #Phuketvibes #EscapesPhuket"
      },
      {
        "id": "3410",
        "name": "กระบี่"
      },
      {
        "id": "3411",
        "name": "เกาะลันตาใหญ่"
      },
      {
        "id": "3412",
        "name": "ทุ่งหยีเพ็ง"
      },
      {
        "id": "3415",
        "name": "#phuket"
      },
      {
        "id": "3416",
        "name": "#Poolvilla"
      },
      {
        "id": "3417",
        "name": "#phuketsandbox"
      },
      {
        "id": "3418",
        "name": "#Anantarahotels"
      },
      {
        "id": "3419",
        "name": "#Minorhotels"
      },
      {
        "id": "3420",
        "name": "#beach "
      },
      {
        "id": "3421",
        "name": "#Maikhaobeach"
      },
      {
        "id": "3422",
        "name": "#beachescapes"
      },
      {
        "id": "3423",
        "name": "#holidays"
      },
      {
        "id": "3424",
        "name": "#Thailand "
      },
      {
        "id": "3435",
        "name": "phiphiislands"
      },
      {
        "id": "3436",
        "name": "mayabay"
      },
      {
        "id": "3437",
        "name": "pileh"
      },
      {
        "id": "3438",
        "name": "Citytour"
      },
      {
        "id": "3439",
        "name": "speedboat"
      },
      {
        "id": "3440",
        "name": "catamaran"
      },
      {
        "id": "3445",
        "name": "#จุดชมวิวปลาโลมา "
      },
      {
        "id": "3446",
        "name": "#ศาลเจ้าพ่อมัจฉานุ"
      },
      {
        "id": "3447",
        "name": "#สะพานแดง "
      },
      {
        "id": "3449",
        "name": "ภูเก็ต"
      },
      {
        "id": "3450",
        "name": "อนุสาวรีย์"
      },
      {
        "id": "3452",
        "name": "Resort, Fishing, Activities, Getaway, "
      },
      {
        "id": "3458",
        "name": "#สะพานชมวิวชายทะเลกาหลง  "
      },
      {
        "id": "3459",
        "name": "#สะพานชายทะเลกาหลง "
      },
      {
        "id": "3460",
        "name": "#สะพานไม้สายรุ้ง "
      },
      {
        "id": "3461",
        "name": "#สะพานสายรุ้ง "
      },
      {
        "id": "3462",
        "name": "#สีสันแห่งป่าชายเลน "
      },
      {
        "id": "3463",
        "name": "Tourism"
      },
      {
        "id": "3472",
        "name": "Tailor-made Holidays"
      },
      {
        "id": "3473",
        "name": "Tailor-made Travel, Family Travel"
      },
      {
        "id": "3474",
        "name": "Multi-generational Travel"
      },
      {
        "id": "3475",
        "name": "Sustainable Travel"
      },
      {
        "id": "3476",
        "name": "Ethical Travel"
      },
      {
        "id": "3477",
        "name": "Samui"
      },
      {
        "id": "3480",
        "name": "#ดอนหอยแครง"
      },
      {
        "id": "3481",
        "name": "#ป่าชายเลนมหาชัย"
      },
      {
        "id": "3486",
        "name": "Phuket Luxury Hotel"
      },
      {
        "id": "3487",
        "name": "Luxury Hotel in Phuket"
      },
      {
        "id": "3488",
        "name": "Sri Panwa Phuket"
      },
      {
        "id": "3489",
        "name": "Luxury Villa Phuket"
      },
      {
        "id": "3490",
        "name": "Baba Beach Club Phuket"
      },
      {
        "id": "3491",
        "name": "Phuket Party"
      },
      {
        "id": "3492",
        "name": "Beach Bar"
      },
      {
        "id": "3498",
        "name": "#ถีบเรือเป็ด "
      },
      {
        "id": "3499",
        "name": "#แปลงผักสวนครัว "
      },
      {
        "id": "3500",
        "name": "#พายเรือชมสวนมะม่วงและสวนมะพร้าว "
      },
      {
        "id": "3501",
        "name": "#โรงเรือนปลูกเมลอน "
      },
      {
        "id": "3502",
        "name": "#ศาลาไม้ไผ่"
      },
      {
        "id": "3505",
        "name": "#พิพิธภัณฑ์พระรามเก้า "
      },
      {
        "id": "3506",
        "name": "#แหล่งท่องเที่ยวเพื่อการเรียนรู้"
      },
      {
        "id": "3511",
        "name": "#จุดชมวิวสวยสุดโรแมนติก"
      },
      {
        "id": "3512",
        "name": "#ดงตาลสามโคก "
      },
      {
        "id": "3513",
        "name": "#บรรยากาศของพระอาทิตย์ตก"
      },
      {
        "id": "3514",
        "name": "#ปั่นจักรยาน"
      },
      {
        "id": "3520",
        "name": "#ต้นจามจุรียักษ์ "
      },
      {
        "id": "3521",
        "name": "#เที่ยวปทุม"
      },
      {
        "id": "3522",
        "name": "#บ้าน 1000 ไม้ "
      },
      {
        "id": "3523",
        "name": "#ร้านอาหารและคาเฟ่ "
      },
      {
        "id": "3524",
        "name": "#แหล่งเรียนรู้การเกษตร"
      },
      {
        "id": "3527",
        "name": "#กระท่อมลุงจรณ์ "
      },
      {
        "id": "3528",
        "name": "#กระบองเพชรลุงจรณ์ "
      },
      {
        "id": "3532",
        "name": "ต้นกระบาก"
      },
      {
        "id": "3533",
        "name": "ตาก"
      },
      {
        "id": "3534",
        "name": "ตากสิน "
      },
      {
        "id": "3535",
        "name": "อุทยานแห่งชาติตากสิน"
      },
      {
        "id": "3539",
        "name": "#โครงการอนุรักษ์พันธุกรรมพืช"
      },
      {
        "id": "3540",
        "name": "#พิพิธภัณฑ์บัว "
      },
      {
        "id": "3541",
        "name": "#มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี "
      },
      {
        "id": "3548",
        "name": "#การเกษตรสวนผสม "
      },
      {
        "id": "3549",
        "name": "#บ้านนาครูธานี"
      },
      {
        "id": "3550",
        "name": "#บ้านหอมชื่น"
      },
      {
        "id": "3551",
        "name": "#เรียนรู้ภูมิปัญญาไทย"
      },
      {
        "id": "3552",
        "name": "#เรียนรู้วิถีชีวิตชาวนาไทย"
      },
      {
        "id": "3553",
        "name": "#สัมผัสวิถีชีวิตไทย"
      },
      {
        "id": "3557",
        "name": "#เบญจรงค์"
      },
      {
        "id": "3558",
        "name": "#หมู่บ้านเบญจรงค์"
      },
      {
        "id": "3559",
        "name": "#หมู่บ้านเบญจรงค์ดอนไก่ดี "
      },
      {
        "id": "3564",
        "name": "#วัดสวยนครปฐม"
      },
      {
        "id": "3565",
        "name": "#วัดหนองพงนก"
      },
      {
        "id": "3566",
        "name": "#หลวงพ่อมงคลนิมิต"
      },
      {
        "id": "3567",
        "name": "#ไหว้พระใกล้กรุงเทพ"
      },
      {
        "id": "3572",
        "name": "#พระนอนองค์ใหญ่ที่สุดในสมุทรสาคร "
      },
      {
        "id": "3573",
        "name": "#พระพุทธชัยมงคล"
      },
      {
        "id": "3574",
        "name": "#วัดน่วมกานนท์"
      },
      {
        "id": "3575",
        "name": "#หลวงพ่อหาย"
      },
      {
        "id": "3579",
        "name": "#พระมหาธาตุรัตนเจดีย์"
      },
      {
        "id": "3580",
        "name": "#วัดธรรมจริยาภิรมย์"
      },
      {
        "id": "3581",
        "name": "#หลวงพ่ออู่ทอง"
      },
      {
        "id": "3586",
        "name": "#กวางดาว"
      },
      {
        "id": "3587",
        "name": "#ปลาคาร์ฟ"
      },
      {
        "id": "3588",
        "name": "#ฟาร์มแกะ"
      },
      {
        "id": "3589",
        "name": "#สวนนกยูงสามพราน"
      },
      {
        "id": "3593",
        "name": "# ศูนย์การเรียนรู้นานาชาติ"
      },
      {
        "id": "3594",
        "name": "#โดมแมลง"
      },
      {
        "id": "3595",
        "name": "#อุทยานแมลงเฉลิมพระเกียรติ"
      },
      {
        "id": "3600",
        "name": "#ทุ่งทานตะวัน"
      },
      {
        "id": "3601",
        "name": "#หลวงปู่หลิวนั่งพญาเต่ามังกร"
      },
      {
        "id": "3602",
        "name": "#หลวงพ่อโต"
      },
      {
        "id": "3603",
        "name": "#ไหว้พระขอพร"
      },
      {
        "id": "3605",
        "name": "#ตลาดน้ำทุ่งบัวแดง"
      },
      {
        "id": "3606",
        "name": "Thailand Tour Packages From India"
      },
      {
        "id": "3608",
        "name": "YOUR ONE-STOP TRAVEL STOP"
      },
      {
        "id": "3610",
        "name": "panfantour"
      },
      {
        "id": "3613",
        "name": "music event"
      },
      {
        "id": "3614",
        "name": "dance event"
      },
      {
        "id": "3616",
        "name": "pratunam"
      },
      {
        "id": "3656",
        "name": "walkrally"
      },
      {
        "id": "3657",
        "name": "familytravel"
      },
      {
        "id": "3658",
        "name": "Workshop"
      },
      {
        "id": "3659",
        "name": "Team Building"
      },
      {
        "id": "3660",
        "name": "group tours"
      },
      {
        "id": "3661",
        "name": "private tours"
      },
      {
        "id": "3662",
        "name": "honeymoon"
      },
      {
        "id": "3663",
        "name": "Training Seminar"
      },
      {
        "id": "3664",
        "name": "panfanpanrak"
      },
      {
        "id": "3665",
        "name": "Tiketing"
      },
      {
        "id": "3666",
        "name": "Booking"
      },
      {
        "id": "3667",
        "name": "Driving"
      },
      {
        "id": "3668",
        "name": "travelfamily"
      },
      {
        "id": "3669",
        "name": "hitchhiking"
      },
      {
        "id": "3670",
        "name": "hitchhiker"
      },
      {
        "id": "3671",
        "name": "ravellingsolo "
      },
      {
        "id": "3672",
        "name": "solotraveller"
      },
      {
        "id": "3673",
        "name": "solo"
      },
      {
        "id": "3674",
        "name": "mountains"
      },
      {
        "id": "3675",
        "name": "nature"
      },
      {
        "id": "3676",
        "name": "solotrip "
      },
      {
        "id": "3677",
        "name": "sportday"
      },
      {
        "id": "3678",
        "name": "Holiday"
      },
      {
        "id": "3679",
        "name": "City"
      },
      {
        "id": "3680",
        "name": "Trip"
      },
      {
        "id": "3681",
        "name": "backpacker"
      },
      {
        "id": "3682",
        "name": "surfing"
      },
      {
        "id": "3683",
        "name": "panfan"
      },
      {
        "id": "3684",
        "name": "rent"
      },
      {
        "id": "3685",
        "name": "Rent a car"
      },
      {
        "id": "3686",
        "name": "car"
      },
      {
        "id": "3687",
        "name": "van"
      },
      {
        "id": "3688",
        "name": "Tour Bus"
      },
      {
        "id": "3689",
        "name": "Lover"
      },
      {
        "id": "3690",
        "name": "Agency"
      },
      {
        "id": "3691",
        "name": "Travel Agency"
      },
      {
        "id": "3692",
        "name": "Tradition"
      },
      {
        "id": "3693",
        "name": "Local"
      },
      {
        "id": "3694",
        "name": "Group"
      },
      {
        "id": "3695",
        "name": "retirement party "
      },
      {
        "id": "3696",
        "name": "domestically"
      },
      {
        "id": "3697",
        "name": "internationally"
      },
      {
        "id": "3698",
        "name": "We also offer payment via Cryptocurrency."
      },
      {
        "id": "3706",
        "name": "Hotel reservation"
      },
      {
        "id": "3707",
        "name": "Inbound"
      },
      {
        "id": "3708",
        "name": "Outbound"
      },
      {
        "id": "3709",
        "name": "Taxi & Minibus"
      },
      {
        "id": "3710",
        "name": "Group tour"
      },
      {
        "id": "3713",
        "name": "Thai souvenir"
      },
      {
        "id": "3714",
        "name": "Thai snacks"
      },
      {
        "id": "3715",
        "name": "Subscription box"
      },
      {
        "id": "3716",
        "name": "Local Thai food"
      },
      {
        "id": "3717",
        "name": "Premium gifts"
      },
      {
        "id": "3723",
        "name": "จ.นครปฐม"
      },
      {
        "id": "3724",
        "name": "นครปฐม"
      },
      {
        "id": "3725",
        "name": "พระราชวังสนามจันทร์"
      },
      {
        "id": "3726",
        "name": "สะพาน"
      },
      {
        "id": "3727",
        "name": "สะพานสุนทรถวาย"
      },
      {
        "id": "3732",
        "name": "พระราหู"
      },
      {
        "id": "3733",
        "name": "ราหูอมจันทร์"
      },
      {
        "id": "3734",
        "name": "วัด นครปฐม"
      },
      {
        "id": "3735",
        "name": "วัดศรีษะทอง"
      },
      {
        "id": "3740",
        "name": "จ.สมุทรสาคร"
      },
      {
        "id": "3741",
        "name": "วัด สมุทรสาคร"
      },
      {
        "id": "3742",
        "name": "วัดดัง"
      },
      {
        "id": "3743",
        "name": "วัดท่าไม้"
      },
      {
        "id": "3744",
        "name": "สมุทรสาคร"
      },
      {
        "id": "3749",
        "name": "พุทฑมณฑล"
      },
      {
        "id": "3750",
        "name": "พุทธมณฑลสมุทรสาคร"
      },
      {
        "id": "3751",
        "name": "สวนสาธารณะ"
      },
      {
        "id": "3752",
        "name": "สวนสาธารณะเฉลิมพระเกียรติพุทธมณฑล"
      },
      {
        "id": "3756",
        "name": "วัดเกตุมดี"
      },
      {
        "id": "3757",
        "name": "วัดเกตุมดีศรีวราราม"
      },
      {
        "id": "3758",
        "name": "วัดเกตุวดีศรีวราราม"
      },
      {
        "id": "3761",
        "name": "วัดใหญ่"
      },
      {
        "id": "3762",
        "name": "วัดใหญ่จอมปราสาท"
      },
      {
        "id": "3767",
        "name": "นักบุญ"
      },
      {
        "id": "3768",
        "name": "นักบุญอันนา"
      },
      {
        "id": "3769",
        "name": "บางหญ้าแพรก"
      },
      {
        "id": "3770",
        "name": "วัดนักบุญอันนา"
      },
      {
        "id": "3777",
        "name": "จังหวัดปทุมธานี"
      },
      {
        "id": "3778",
        "name": "ตลาด"
      },
      {
        "id": "3779",
        "name": "ตลาดน้ำ"
      },
      {
        "id": "3780",
        "name": "ตลาดน้ำ รังสิต"
      },
      {
        "id": "3781",
        "name": "ตลาดน้ำรังสิต"
      },
      {
        "id": "3782",
        "name": "ปทุม"
      },
      {
        "id": "3783",
        "name": "รังสิต"
      },
      {
        "id": "3788",
        "name": "เมืองปทุม"
      },
      {
        "id": "3789",
        "name": "วัด ปทุมธานี"
      },
      {
        "id": "3790",
        "name": "วัดโบสถ์"
      },
      {
        "id": "3791",
        "name": "อำเภอเมือง"
      },
      {
        "id": "3792",
        "name": "อำเภอเมืองปทุมธานี"
      },
      {
        "id": "3800",
        "name": "จ.ปทุมธานี"
      },
      {
        "id": "3801",
        "name": "ภาพวาด"
      },
      {
        "id": "3802",
        "name": "ภาพวาด 3 มิติ"
      },
      {
        "id": "3803",
        "name": "วัดปัญญา"
      },
      {
        "id": "3804",
        "name": "วัดปัญญา ปทุม"
      },
      {
        "id": "3805",
        "name": "วัดปัญญา ปทุมธานี"
      },
      {
        "id": "3806",
        "name": "วัดปัญญานันทาราม"
      },
      {
        "id": "3807",
        "name": "phuket tours"
      },
      {
        "id": "3808",
        "name": "samui tours"
      },
      {
        "id": "3809",
        "name": "krabi tours"
      },
      {
        "id": "3810",
        "name": "pattaya tours"
      },
      {
        "id": "3811",
        "name": "chiang mai tours"
      },
      {
        "id": "3812",
        "name": "bangkok tours"
      },
      {
        "id": "3813",
        "name": "chatrium, chatrium grand bangkok, 5-star hotel, luxury hotel"
      },
      {
        "id": "3816",
        "name": "Aonang Elephant Sanctuary"
      },
      {
        "id": "3817",
        "name": "AonangElephantSanctuary"
      },
      {
        "id": "3818",
        "name": "elephantsanctuary"
      },
      {
        "id": "3819",
        "name": "krabielephant"
      },
      {
        "id": "3820",
        "name": "familyactivities"
      },
      {
        "id": "3821",
        "name": "thaielephants"
      },
      {
        "id": "3833",
        "name": "halal"
      },
      {
        "id": "3834",
        "name": "halal food"
      },
      {
        "id": "3835",
        "name": "food delivery"
      },
      {
        "id": "3836",
        "name": "pizza"
      },
      {
        "id": "3837",
        "name": "pasta"
      },
      {
        "id": "3838",
        "name": "Japanese donburi"
      },
      {
        "id": "3839",
        "name": "salad"
      },
      {
        "id": "3840",
        "name": "Chocolate lava cake"
      },
      {
        "id": "3841",
        "name": "catering services"
      },
      {
        "id": "3842",
        "name": "lunchbox"
      },
      {
        "id": "3843",
        "name": "snack box"
      },
      {
        "id": "3844",
        "name": "food for seminar"
      },
      {
        "id": "3846",
        "name": "ตราด"
      },
      {
        "id": "3847",
        "name": "โบราณสถานจวนเรสิดังกัมปอร์ต"
      },
      {
        "id": "3858",
        "name": "chevala, wellness, hua-hin,"
      },
      {
        "id": "3859",
        "name": "beauty"
      },
      {
        "id": "3860",
        "name": "medical tourism"
      },
      {
        "id": "3861",
        "name": "medical destination"
      },
      {
        "id": "3865",
        "name": "ลำปาง"
      },
      {
        "id": "3866",
        "name": "วัดเฉลิมพระเกียรติพระจอมเกล้าราชานุสรณ์"
      },
      {
        "id": "3867",
        "name": "วัดพระบาทปู่ผาแดง"
      },
      {
        "id": "3868",
        "name": "วัดพุทธบาทสุทธาวาส"
      },
      {
        "id": "3873",
        "name": "siam"
      },
      {
        "id": "3874",
        "name": "siam square"
      },
      {
        "id": "3875",
        "name": "Vacay Wellness "
      },
      {
        "id": "3876",
        "name": "Vacay Medical"
      },
      {
        "id": "3877",
        "name": "Vacay Wellness and Medical"
      },
      {
        "id": "3878",
        "name": "Wellness and Medical Tourism "
      },
      {
        "id": "3880",
        "name": "food tour thailand, bangkok food tour, food tours"
      },
      {
        "id": "3881",
        "name": "food tour thailand "
      },
      {
        "id": "3882",
        "name": "thai food tour"
      },
      {
        "id": "3883",
        "name": "bangkok food tour"
      },
      {
        "id": "3884",
        "name": "chinatown tour"
      },
      {
        "id": "3885",
        "name": "food tours"
      },
      {
        "id": "3886",
        "name": "thai cuisine tour"
      },
      {
        "id": "3887",
        "name": "tuk tuk night"
      },
      {
        "id": "3888",
        "name": "tuktuk"
      },
      {
        "id": "3891",
        "name": "dasada"
      },
      {
        "id": "3892",
        "name": "siamdasada"
      },
      {
        "id": "3893",
        "name": "Think Thailand - Think Travel Master"
      },
      {
        "id": "3894",
        "name": "Destination Management Company"
      },
      {
        "id": "3895",
        "name": "DMC"
      },
      {
        "id": "3896",
        "name": "Thailand Travel Agency"
      },
      {
        "id": "3897",
        "name": "Tour Operator"
      },
      {
        "id": "3900",
        "name": "khaoyai resort"
      },
      {
        "id": "3901",
        "name": "khaoyai hotel"
      },
      {
        "id": "3904",
        "name": "ดอยบุษราคัม"
      },
      {
        "id": "3905",
        "name": "พะเยา"
      },
      {
        "id": "3906",
        "name": "วัดอนาลโยทิพยาราม"
      },
      {
        "id": "3908",
        "name": "ประจวบคีรีขันธ์"
      },
      {
        "id": "3909",
        "name": "วนอุทยานปราณบุรี"
      },
      {
        "id": "3912",
        "name": "ถ้ำพระยานคร"
      },
      {
        "id": "3913",
        "name": "สามร้อยยอด"
      },
      {
        "id": "3917",
        "name": "กุยบุรี"
      },
      {
        "id": "3918",
        "name": "ซาฟารีเมืองไทย"
      },
      {
        "id": "3919",
        "name": "อุทยานแห่งชาติกุยบุรี"
      },
      {
        "id": "3922",
        "name": "พระนครคีรี"
      },
      {
        "id": "3923",
        "name": "เพชรบุรี"
      },
      {
        "id": "3924",
        "name": "อุทยานประวัติศาสตร์"
      },
      {
        "id": "3925",
        "name": "Phi Phi Island Tour"
      },
      {
        "id": "3926",
        "name": "Phi Phi Island Boat Tours"
      },
      {
        "id": "3927",
        "name": "Longtail Boat Tours Phi Phi"
      },
      {
        "id": "3928",
        "name": "Luxury Phi Phi Island Tours"
      },
      {
        "id": "3929",
        "name": "Private Phi Phi Island Tours"
      },
      {
        "id": "3930",
        "name": "Private Phi Phi Island Tours From Phuket"
      },
      {
        "id": "3931",
        "name": "Private Snorkeling Tours Phi Phi"
      },
      {
        "id": "3934",
        "name": "โครงการศึกษาวิจัย"
      },
      {
        "id": "3935",
        "name": "แหลมผักเบี้ย"
      },
      {
        "id": "3937",
        "name": "แก่งกระจาน"
      },
      {
        "id": "3938",
        "name": "อุทยานแห่งชาติแก่งกระจาน"
      },
      {
        "id": "3940",
        "name": "วัดใหญ่สุวรรณารามวรวิหาร"
      },
      {
        "id": "3942",
        "name": "li"
      },
      {
        "id": "3945",
        "name": "พระธาตุฉิมพลีพระเศรษฐีนวโกฏิ "
      },
      {
        "id": "3946",
        "name": "วัดข่อย"
      },
      {
        "id": "3949",
        "name": "ชุมชน"
      },
      {
        "id": "3950",
        "name": "บ้านถ้ำเสือ"
      },
      {
        "id": "3951",
        "name": "โฮมสเตย์"
      },
      {
        "id": "3952",
        "name": "pattaya tours, pattaya packages, thailand packages"
      },
      {
        "id": "3956",
        "name": "เขารัง"
      },
      {
        "id": "3957",
        "name": "จุดชมวิวเขารัง"
      },
      {
        "id": "3962",
        "name": "ชิโน-โปรตุกีส"
      },
      {
        "id": "3963",
        "name": "ตึกเก่า"
      },
      {
        "id": "3964",
        "name": "ถนนกระบี่"
      },
      {
        "id": "3965",
        "name": "บ้านชินประชา"
      },
      {
        "id": "3967",
        "name": "เพอรานากัน"
      },
      {
        "id": "3969",
        "name": "เมืองเก่า"
      },
      {
        "id": "3970",
        "name": "ย่านเมืองเก่าภูเก็ต"
      },
      {
        "id": "3973",
        "name": "พระพุทธมิ่งมงคลเอกนาคคีรี"
      },
      {
        "id": "3974",
        "name": "พระใหญ่เมืองภูเก็ต"
      },
      {
        "id": "3976",
        "name": "วัดฉลอง"
      },
      {
        "id": "3977",
        "name": "วัดไชยธาราราม"
      },
      {
        "id": "3978",
        "name": "หลวงพ่อแช่ม"
      },
      {
        "id": "3980",
        "name": "อ่าวฉลอง"
      },
      {
        "id": "3983",
        "name": "กางเต็นท์"
      },
      {
        "id": "3984",
        "name": "ภูชี้เพ้อ"
      },
      {
        "id": "3986",
        "name": "บ้านเมืองปอน"
      },
      {
        "id": "3989",
        "name": "ดอยปุยหลวง "
      },
      {
        "id": "3990",
        "name": "อุทยานแห่งชาติน้ำตกแม่สุรินทร์"
      },
      {
        "id": "3994",
        "name": "Ranong"
      },
      {
        "id": "3995",
        "name": "ร่อนแร่"
      },
      {
        "id": "3996",
        "name": "ระนอง"
      },
      {
        "id": "3997",
        "name": "หาดส้มแป้น"
      },
      {
        "id": "4000",
        "name": "ชะอวด"
      },
      {
        "id": "4001",
        "name": "ล่องแพ"
      },
      {
        "id": "4002",
        "name": "วังหอน"
      },
      {
        "id": "4003",
        "name": "travel agent"
      },
      {
        "id": "4004",
        "name": "land operator"
      },
      {
        "id": "4005",
        "name": "travel tour"
      },
      {
        "id": "4006",
        "name": "tour package"
      },
      {
        "id": "4007",
        "name": "travel package"
      },
      {
        "id": "4008",
        "name": "holiday tour"
      },
      {
        "id": "4013",
        "name": "ชุมชนบ้านบางโรง"
      },
      {
        "id": "4014",
        "name": "ท่องเที่ยวโดยชุมชน"
      },
      {
        "id": "4015",
        "name": "บ้านบางโรง"
      },
      {
        "id": "4017",
        "name": "พังงา"
      },
      {
        "id": "4018",
        "name": "สะพานสารสิน"
      },
      {
        "id": "4020",
        "name": "เกาะเฮ"
      },
      {
        "id": "4022",
        "name": "เกาะราชา"
      },
      {
        "id": "4026",
        "name": "Nui Beach "
      },
      {
        "id": "4027",
        "name": "หาดนุ้ย "
      },
      {
        "id": "4029",
        "name": "หาดในหาน"
      },
      {
        "id": "4031",
        "name": "LaemPromthepCape"
      },
      {
        "id": "4032",
        "name": "แหลมพรหมเทพ "
      },
      {
        "id": "4035",
        "name": "Kolon"
      },
      {
        "id": "4036",
        "name": "เกาะโหลน"
      },
      {
        "id": "4039",
        "name": "Rawai Beach "
      },
      {
        "id": "4040",
        "name": "หาดราไวย์"
      },
      {
        "id": "4042",
        "name": "วัดสระลงเรือ"
      },
      {
        "id": "4045",
        "name": "Ao Chalong"
      },
      {
        "id": "4046",
        "name": "Chalong Bay "
      },
      {
        "id": "4048",
        "name": "วัดเขาสูงแจ่มฟ้า"
      },
      {
        "id": "4049",
        "name": "วัดถ้ำเสือ"
      },
      {
        "id": "4051",
        "name": "ต้นจามจุรียักษ์"
      },
      {
        "id": "4053",
        "name": "โรงงานกระดาษไทยกาญจนบุรี"
      },
      {
        "id": "4055",
        "name": "วัดถ้ำพุหว้า"
      },
      {
        "id": "4057",
        "name": "วัดเมตตาธรรมโพธิญาณ"
      },
      {
        "id": "4059",
        "name": "วัดถ้ำคีรีธรรม"
      },
      {
        "id": "4061",
        "name": "กิจกรรมพาย SUP Board"
      },
      {
        "id": "4063",
        "name": "สุสานทหารสัมพันธมิตรดอนรัก"
      },
      {
        "id": "4064",
        "name": "สะพานข้ามแม่น้ำแคว"
      },
      {
        "id": "4067",
        "name": "KhaoRang "
      },
      {
        "id": "4071",
        "name": "BanChinpracha"
      },
      {
        "id": "4072",
        "name": "Chinpracha"
      },
      {
        "id": "4073",
        "name": "HouseMuseum "
      },
      {
        "id": "4076",
        "name": "PhuketThaiHuaMuseum"
      },
      {
        "id": "4077",
        "name": "ภูเก็ตไทยหัว"
      },
      {
        "id": "4079",
        "name": "Peranakan"
      },
      {
        "id": "4081",
        "name": "Phuket Old Town"
      },
      {
        "id": "4084",
        "name": "Patong Beach"
      },
      {
        "id": "4085",
        "name": "หาดป่าตอง"
      },
      {
        "id": "4089",
        "name": "Wat Phra Tong"
      },
      {
        "id": "4090",
        "name": "วัดพระทอง "
      },
      {
        "id": "4091",
        "name": "วัดพระผุด"
      },
      {
        "id": "4094",
        "name": "Hat Surin"
      },
      {
        "id": "4095",
        "name": "หาดสุรินทร์ "
      },
      {
        "id": "4099",
        "name": "หาดในยาง"
      },
      {
        "id": "4100",
        "name": "หาดไม้ขาว"
      },
      {
        "id": "4101",
        "name": "อุทยานแห่งชาติสิรินาถ"
      },
      {
        "id": "4103",
        "name": "รถไฟสายมรณะ"
      },
      {
        "id": "4105",
        "name": "น้ำตก"
      },
      {
        "id": "4106",
        "name": "น้ำตกห้วยแม่ขมิ้น"
      },
      {
        "id": "4108",
        "name": "น้ำตกเอราวัณ"
      },
      {
        "id": "4109",
        "name": "สวนสัตว์"
      },
      {
        "id": "4111",
        "name": "วัดทิพย์สุคนธาราม"
      },
      {
        "id": "4113",
        "name": "พุทธอุทยานมหาราช"
      },
      {
        "id": "4114",
        "name": "อยุธยา"
      },
      {
        "id": "4116",
        "name": "พิพิธภัณฑ์ศิลป์แผ่นดิน"
      },
      {
        "id": "4117",
        "name": "พระราชวังบางปะอิน"
      },
      {
        "id": "4119",
        "name": "วัดพระราม"
      },
      {
        "id": "4121",
        "name": "ศูนย์การเรียนรู้เศรษฐกิจพอเพียง"
      },
      {
        "id": "4123",
        "name": "วัดพระนอน"
      },
      {
        "id": "4125",
        "name": "วัดหน้าพระเมรุ"
      },
      {
        "id": "4126",
        "name": "Thailand Tour Packages"
      },
      {
        "id": "4127",
        "name": "Thailand Bacpacking"
      },
      {
        "id": "4131",
        "name": "Chiao Lan"
      },
      {
        "id": "4132",
        "name": "Rajjaprabha Dam "
      },
      {
        "id": "4133",
        "name": "เขื่อนเชี่ยวหลาน "
      },
      {
        "id": "4134",
        "name": "เขื่อนรัชชประภา "
      },
      {
        "id": "4135",
        "name": "สุราษฎร์ธานี"
      },
      {
        "id": "4143",
        "name": "Ban Thepphithak community "
      },
      {
        "id": "4144",
        "name": "community "
      },
      {
        "id": "4145",
        "name": "heart-shaped mountain "
      },
      {
        "id": "4146",
        "name": "Rope bridge"
      },
      {
        "id": "4147",
        "name": "เขารูปหัวใจ"
      },
      {
        "id": "4148",
        "name": "ชุมชนบ้านเขาเทพพิทักษ์ "
      },
      {
        "id": "4149",
        "name": "สะพานเขาแขวน "
      },
      {
        "id": "4153",
        "name": "Bang Bai Mai "
      },
      {
        "id": "4154",
        "name": "ท่องเที่ยวเชิงอนุรักษ์"
      },
      {
        "id": "4155",
        "name": "บางใบไม้ "
      },
      {
        "id": "4157",
        "name": "The Grand Palace"
      },
      {
        "id": "4158",
        "name": "พระบรมมหาราชวัง"
      },
      {
        "id": "4160",
        "name": "อุทยานแห่งชาติเขาสก"
      },
      {
        "id": "4162",
        "name": "Wat Phra Kaeo"
      },
      {
        "id": "4163",
        "name": "วัดพระแก้ว"
      },
      {
        "id": "4168",
        "name": "Muko Ang Thong Marine National Park"
      },
      {
        "id": "4169",
        "name": "หมู่เกาะอ่างทอง "
      },
      {
        "id": "4170",
        "name": "อุทยานแห่งชาติหมู่เกาะอ่างทอง "
      },
      {
        "id": "4173",
        "name": "Ko Samui "
      },
      {
        "id": "4174",
        "name": "เกาะสมุย "
      },
      {
        "id": "4175",
        "name": "สมุย "
      },
      {
        "id": "4177",
        "name": "ตลาดน้ำตลิ่งชัน"
      },
      {
        "id": "4179",
        "name": "ตลาดวังหลัง"
      },
      {
        "id": "4181",
        "name": "วัดระฆัง"
      },
      {
        "id": "4183",
        "name": "วัดอรุณ"
      },
      {
        "id": "4185",
        "name": "ตลาดนางเลิ้ง"
      },
      {
        "id": "4190",
        "name": "Lilet"
      },
      {
        "id": "4191",
        "name": "Lilet Conservation Tourism Community "
      },
      {
        "id": "4192",
        "name": "กลุ่มชุมชนลีเล็ดนำเที่ยวเพื่อการอนุรักษ์ "
      },
      {
        "id": "4193",
        "name": "ชุมชนลีเล็ด"
      },
      {
        "id": "4196",
        "name": "Ban Phum Riang Ecotourism Community"
      },
      {
        "id": "4197",
        "name": "กลุ่มท่องเที่ยวเชิงอนุรักษ์บ้านพุมเรียง "
      },
      {
        "id": "4199",
        "name": "Wat Phra Borommathat Chaiya Ratcha Worawihan"
      },
      {
        "id": "4200",
        "name": "วัดพระบรมธาตุไชยาราชวรวิหาร"
      },
      {
        "id": "4202",
        "name": "Khao San Road"
      },
      {
        "id": "4203",
        "name": "ถนนข้าวสาร"
      },
      {
        "id": "4206",
        "name": "Ban Nam Rat Headwaters"
      },
      {
        "id": "4207",
        "name": "ป่าต้นน้ำบ้านน้ำราด"
      },
      {
        "id": "4209",
        "name": "วัดราชนัดดารามวรวิหาร"
      },
      {
        "id": "4213",
        "name": "Dharma Park"
      },
      {
        "id": "4214",
        "name": "Khao Na Nai Luang Dharma Park"
      },
      {
        "id": "4215",
        "name": "อุทยานธรรมเขานาในหลวง"
      },
      {
        "id": "4217",
        "name": "วัดโพธิ์"
      },
      {
        "id": "4220",
        "name": "Khlong Phanom National Park"
      },
      {
        "id": "4221",
        "name": "อุทยานแห่งชาติคลองพนม"
      },
      {
        "id": "4227",
        "name": "Laem Ngop "
      },
      {
        "id": "4228",
        "name": "Laem Ngop Viewpoint "
      },
      {
        "id": "4229",
        "name": "จุดชมวิวแหลมงอบ"
      },
      {
        "id": "4230",
        "name": "แหลมงอบ"
      },
      {
        "id": "4235",
        "name": "Changthun Eco-Museum "
      },
      {
        "id": "4236",
        "name": "Eco-Museum "
      },
      {
        "id": "4237",
        "name": "นิเวศพิพิธภัณฑ์บ้านช้างทูน"
      },
      {
        "id": "4238",
        "name": "บ้านช้างทูน"
      },
      {
        "id": "4241",
        "name": "Mai Rut Community Tourism Enterprise "
      },
      {
        "id": "4242",
        "name": "วิสาหกิจชุมชนท่องเที่ยวโดยชุมชนตำบลไม้รูด"
      },
      {
        "id": "4247",
        "name": "Khao Lan "
      },
      {
        "id": "4248",
        "name": "Thai Red Cross Society"
      },
      {
        "id": "4249",
        "name": "เขาล้าน"
      },
      {
        "id": "4250",
        "name": "ศูนย์ราชการุณย์สภากาชาดไทย เขาล้าน"
      },
      {
        "id": "4257",
        "name": "Ban Tha Ranae "
      },
      {
        "id": "4258",
        "name": "Ban Tha Ranae Community Tourism Enterprise "
      },
      {
        "id": "4259",
        "name": "Community Tourism Enterprise "
      },
      {
        "id": "4260",
        "name": "บ้านท่าระแนะ "
      },
      {
        "id": "4261",
        "name": "วิสาหกิจชุมชน"
      },
      {
        "id": "4262",
        "name": "วิสาหกิจชุมชนท่องเที่ยวชุมชนบ้านท่าระแนะ "
      },
      {
        "id": "4265",
        "name": "Residang Kampot Residence"
      },
      {
        "id": "4266",
        "name": "โบราณสถานจวนเรซิดัง กัมปอร์ต"
      },
      {
        "id": "4269",
        "name": "Kho Khao Brahminy Kite Viewing Point "
      },
      {
        "id": "4270",
        "name": "จุดชมเหยี่ยวแดงคอขาว"
      },
      {
        "id": "4273",
        "name": "Ko Tao"
      },
      {
        "id": "4274",
        "name": "เกาะเต่า"
      },
      {
        "id": "4276",
        "name": "Ko Chang "
      },
      {
        "id": "4277",
        "name": "เกาะช้าง"
      },
      {
        "id": "4280",
        "name": "Muko Chang National Park "
      },
      {
        "id": "4281",
        "name": "อุทยานแห่งชาติหมู่เกาะช้าง "
      },
      {
        "id": "4283",
        "name": "Street Art"
      },
      {
        "id": "4285",
        "name": "พัฒน์พงศ์"
      },
      {
        "id": "4287",
        "name": "หัวลำโพง"
      },
      {
        "id": "4289",
        "name": "Sea Life Bangkok Ocean World"
      },
      {
        "id": "4291",
        "name": "เยาวราช"
      },
      {
        "id": "4293",
        "name": "คลองโอ่งอ่าง"
      },
      {
        "id": "4295",
        "name": "วัดไตรมิตรวิทยาราม"
      },
      {
        "id": "4297",
        "name": "ตลาดน้อย"
      },
      {
        "id": "4298",
        "name": "ซาฟารีเวิลด์"
      },
      {
        "id": "4300",
        "name": "ฟาร์มลุงรีย์"
      },
      {
        "id": "4302",
        "name": "คลองบางหลวง"
      },
      {
        "id": "4304",
        "name": "เมืองเก่าระยอง"
      },
      {
        "id": "4306",
        "name": "หาดแม่รำพึง"
      },
      {
        "id": "4308",
        "name": "เกาะเสม็ด"
      },
      {
        "id": "4310",
        "name": "พระเจดีย์กลางน้ำ"
      },
      {
        "id": "4312",
        "name": "ภูฝอยลม"
      },
      {
        "id": "4314",
        "name": "ทะเลบัวแดง"
      },
      {
        "id": "4317",
        "name": "Ko Lao Ya "
      },
      {
        "id": "4318",
        "name": "เกาะเหลายา"
      },
      {
        "id": "4323",
        "name": "Salak Khok "
      },
      {
        "id": "4324",
        "name": "Salak Khok Boat Tour "
      },
      {
        "id": "4325",
        "name": "ชมรมนำเที่ยวพื้นบ้านสลักคอก"
      },
      {
        "id": "4326",
        "name": "บ้านสลักคอก"
      },
      {
        "id": "4328",
        "name": "ชุมชนตำบลตะเคียนเตี้ย"
      },
      {
        "id": "4330",
        "name": "เมืองจำลอง"
      },
      {
        "id": "4331",
        "name": "ปราสาทสัจธรรม"
      },
      {
        "id": "4333",
        "name": "อ่างศิลา"
      },
      {
        "id": "4335",
        "name": "หาดบางแสน"
      },
      {
        "id": "4337",
        "name": "ศูนย์เรียนรู้ป่าวังจันทร์"
      },
      {
        "id": "4339",
        "name": "ทุ่งโปรงทอง"
      },
      {
        "id": "4340",
        "name": "เกาะมันนอก"
      },
      {
        "id": "4342",
        "name": "เกาะมันใน"
      },
      {
        "id": "4344",
        "name": "เกาะมันกลาง"
      },
      {
        "id": "4348",
        "name": "Ko Khai Huaro"
      },
      {
        "id": "4349",
        "name": "Laughing Island"
      },
      {
        "id": "4350",
        "name": "เกาะขายหัวเราะ "
      },
      {
        "id": "4353",
        "name": " Trat"
      },
      {
        "id": "4354",
        "name": "Ko Kradat "
      },
      {
        "id": "4355",
        "name": "เกาะกระดาด "
      },
      {
        "id": "4360",
        "name": "ko Rang "
      },
      {
        "id": "4361",
        "name": "Muko Rang "
      },
      {
        "id": "4362",
        "name": "กาะรัง "
      },
      {
        "id": "4363",
        "name": "หมู่เกาะรัง "
      },
      {
        "id": "4366",
        "name": "Ko Kham "
      },
      {
        "id": "4367",
        "name": "เกาะขาม"
      },
      {
        "id": "4369",
        "name": "Ko Mak "
      },
      {
        "id": "4370",
        "name": "เกาะหมาก "
      },
      {
        "id": "4372",
        "name": "Ko Kut"
      },
      {
        "id": "4373",
        "name": "เกาะกูด"
      },
      {
        "id": "4375",
        "name": "สันหลังมังกร"
      },
      {
        "id": "4376",
        "name": "มัสยิด"
      },
      {
        "id": "4378",
        "name": "วังน้ำมอก"
      },
      {
        "id": "4380",
        "name": "สะพานมิตรภาพ"
      },
      {
        "id": "4382",
        "name": "เมืองโบราณ"
      },
      {
        "id": "4384",
        "name": "แกรนด์แคนยอน"
      },
      {
        "id": "4387",
        "name": "สวนสน"
      },
      {
        "id": "4388",
        "name": "หาดสวนสนประดิพัทธ์"
      },
      {
        "id": "4390",
        "name": "น้ำตกป่าละอู "
      },
      {
        "id": "4392",
        "name": "วัดห้วยมงคล"
      },
      {
        "id": "4393",
        "name": "หัวหิน"
      },
      {
        "id": "4395",
        "name": "บึงบัวสามร้อยยอด "
      },
      {
        "id": "4398",
        "name": "ชุมชนบ้านป่าหมาก"
      },
      {
        "id": "4399",
        "name": "บ้านป่าหมาก"
      },
      {
        "id": "4401",
        "name": "ปราณบุรี"
      },
      {
        "id": "4402",
        "name": "หาดปราณบุรี"
      },
      {
        "id": "4405",
        "name": "ป่าชายเลน"
      },
      {
        "id": "4406",
        "name": "ศูนย์ศึกษาเรียนรู้ระบบนิเวศป่าชายเลนสิรินาถราชินี "
      },
      {
        "id": "4410",
        "name": "ผาฝั่งแดง"
      },
      {
        "id": "4411",
        "name": "หาดผาแดง"
      },
      {
        "id": "4412",
        "name": "หาดฝั่งแดง"
      },
      {
        "id": "4414",
        "name": "อ่าวบ่อทองหลาง"
      },
      {
        "id": "4417",
        "name": "ชุมชนท่องเที่ยว"
      },
      {
        "id": "4418",
        "name": "นวัตวิถีบ้านม้าร้อง"
      },
      {
        "id": "4421",
        "name": "บางสะพาน"
      },
      {
        "id": "4422",
        "name": "วัดทางสาย"
      },
      {
        "id": "4425",
        "name": "น้ำตกห้วยยาง"
      },
      {
        "id": "4426",
        "name": "อุทยานแห่งชาติน้ำตกห้วยยาง"
      },
      {
        "id": "4429",
        "name": "ชุมชนท่องเที่ยวบ้านทุ่งประดู่"
      },
      {
        "id": "4430",
        "name": "บ้านทุ่งประดู่"
      },
      {
        "id": "4432",
        "name": "หาดวนกร "
      },
      {
        "id": "4434",
        "name": "เขาช่องกระจก"
      },
      {
        "id": "4437",
        "name": "ถ้ำพระนอน"
      },
      {
        "id": "4438",
        "name": "วัดอ่าวน้อย "
      },
      {
        "id": "4441",
        "name": "พิพิธภัณฑ์สัตว์น้ำหว้ากอ"
      },
      {
        "id": "4442",
        "name": "หว้ากอ"
      },
      {
        "id": "4446",
        "name": "เขาตาม่องล่าย"
      },
      {
        "id": "4447",
        "name": "วนอุทยาน"
      },
      {
        "id": "4448",
        "name": "วนอุทยานเขาตาม่องล่าย"
      },
      {
        "id": "4450",
        "name": "ปราสาทบ้านไพล"
      },
      {
        "id": "4451",
        "name": "ปราสาทตาควาย"
      },
      {
        "id": "4453",
        "name": "ปราสาทตาเมือน"
      },
      {
        "id": "4455",
        "name": "ปราสาทศีขรภูมิ"
      },
      {
        "id": "4457",
        "name": "หมู่บ้านช้าง"
      },
      {
        "id": "4458",
        "name": "ชุมชนบ้านสวาย"
      },
      {
        "id": "4460",
        "name": "วนอุทยานพนมสวาย"
      },
      {
        "id": "4462",
        "name": "อ่างเก็บน้ำห้วยเสนง"
      },
      {
        "id": "4464",
        "name": "วัดบูรพาราม"
      },
      {
        "id": "4466",
        "name": "ม่อนคลุย"
      },
      {
        "id": "4468",
        "name": "ศาลสมเด็จพระเจ้าตากสินมหาราช"
      },
      {
        "id": "4470",
        "name": "ภูป่าเปาะ"
      },
      {
        "id": "4471",
        "name": "ภูกระดึง"
      },
      {
        "id": "4473",
        "name": "ชุมชนกกสะทอน"
      },
      {
        "id": "4474",
        "name": "ภูลมโล"
      },
      {
        "id": "4476",
        "name": "ภูอีเลิศ"
      },
      {
        "id": "4478",
        "name": "วัดเนรมิตวิปัสสนา"
      },
      {
        "id": "4480",
        "name": "พระธาตุศรีสองรัก"
      },
      {
        "id": "4482",
        "name": "อุทยานแห่งชาติภูเรือ"
      },
      {
        "id": "4483",
        "name": "พระใหญ่ภูคกงิ้ว"
      },
      {
        "id": "4484",
        "name": "แก่งคุดคู้"
      },
      {
        "id": "4485",
        "name": "ถนนคนเดินเชียงคาน"
      },
      {
        "id": "4487",
        "name": "ภูค้อ"
      },
      {
        "id": "4489",
        "name": "อุทยานแห่งชาติภูสวนทราย"
      },
      {
        "id": "4491",
        "name": "บ้านโพธิ์กอง"
      },
      {
        "id": "4493",
        "name": "ปราสาทหินบ้านพลวง"
      },
      {
        "id": "4495",
        "name": "อุทยานแห่งชาติดอยสอยมาลัย-ไม้กลายเป็นหิน"
      },
      {
        "id": "4497",
        "name": "วัดดอนแก้ว"
      },
      {
        "id": "4499",
        "name": "ม่อนหมอกตะวัน"
      },
      {
        "id": "4501",
        "name": "อุทยานแห่งชาติน้ำตกพาเจริญ"
      },
      {
        "id": "4504",
        "name": "น้ำตกทีลอซู"
      },
      {
        "id": "4505",
        "name": "อุ้มผาง"
      },
      {
        "id": "4506",
        "name": "เขื่อนภูมิพล"
      },
      {
        "id": "4507",
        "name": "ตลาดริมเมย"
      },
      {
        "id": "4511",
        "name": "วัดไทยวัฒนาราม"
      },
      {
        "id": "4512",
        "name": "วัดไทยใหญ่"
      },
      {
        "id": "4513",
        "name": "วัดแม่ตาวเงี้ยว"
      },
      {
        "id": "4515",
        "name": "น้ำพุร้อนแม่กาษา"
      },
      {
        "id": "4517",
        "name": "บ่อน้ำแร่โป่งคำราม"
      },
      {
        "id": "4520",
        "name": "Phuket Hotel"
      },
      {
        "id": "4521",
        "name": "Hotel near the beach"
      },
      {
        "id": "4523",
        "name": "น้ำตกขุนกรณ์"
      },
      {
        "id": "4524",
        "name": "วัดร่องขุ่น"
      },
      {
        "id": "4526",
        "name": "บ้านสิงหไคล"
      },
      {
        "id": "4528",
        "name": "ขัวศิลปะ"
      },
      {
        "id": "4530",
        "name": "วัดพระสิงห์"
      },
      {
        "id": "4532",
        "name": "พ่อขุนเม็งรายมหาราช"
      },
      {
        "id": "4534",
        "name": "ชุมชนบ้านท่าขันทอง"
      },
      {
        "id": "4536",
        "name": "พระธาตุเจดีย์หลวง"
      },
      {
        "id": "4539",
        "name": "Doi Chang"
      },
      {
        "id": "4540",
        "name": "ดอยช้าง"
      },
      {
        "id": "4541",
        "name": "สิงห์ปาร์ค"
      },
      {
        "id": "4542",
        "name": "วัดร่องเสือเต้น"
      },
      {
        "id": "4544",
        "name": "วัดห้วยปลากั้ง"
      },
      {
        "id": "4545",
        "name": "พิพิธภัณฑ์บ้านดำ"
      },
      {
        "id": "4547",
        "name": "ขุนน้ำนางนอน"
      },
      {
        "id": "4549",
        "name": "พระธาตุดอยเวา"
      },
      {
        "id": "4550",
        "name": "tour"
      },
      {
        "id": "4554",
        "name": "ชุมชนตลาดล่าง"
      },
      {
        "id": "4555",
        "name": "ชุมชนหน้าด่าน"
      },
      {
        "id": "4557",
        "name": "จักสานกระจูด"
      },
      {
        "id": "4558",
        "name": "ดอยแม่สลอง"
      },
      {
        "id": "4560",
        "name": "ภูชี้ฟ้า"
      },
      {
        "id": "4562",
        "name": "วัดหิรัญญาวาส"
      },
      {
        "id": "4564",
        "name": "ชุมชนบ้านปางห้า"
      },
      {
        "id": "4566",
        "name": "สวนลุงสงค์"
      },
      {
        "id": "4567",
        "name": "ko"
      },
      {
        "id": "4569",
        "name": "ภูชี้เดือน"
      },
      {
        "id": "4571",
        "name": "ภูชี้ดาว"
      },
      {
        "id": "4573",
        "name": "แก่งผาได"
      },
      {
        "id": "4575",
        "name": "ดอยผาหม่น"
      },
      {
        "id": "4577",
        "name": "ดอยผาตั้ง"
      },
      {
        "id": "4578",
        "name": "ไร่ชาฉุยฟง"
      },
      {
        "id": "4580",
        "name": "พระตำหนักดอยตุง"
      },
      {
        "id": "4582",
        "name": "ดอยหัวแม่คำ"
      },
      {
        "id": "4584",
        "name": "พระบรมธาตุศรีนครินทราสถิตมหาสันติคีรี"
      },
      {
        "id": "4586",
        "name": "พระพุทธบาทพระธาตุอินทร์แขวน"
      },
      {
        "id": "4588",
        "name": "อนุสาวรีย์ครูบาศรีวิชัย"
      },
      {
        "id": "4591",
        "name": "กู่ช้าง"
      },
      {
        "id": "4592",
        "name": "กู่ม้า"
      },
      {
        "id": "4594",
        "name": "วัดจามเทวี"
      },
      {
        "id": "4596",
        "name": "วัดมหาวัน"
      },
      {
        "id": "4598",
        "name": "พิพิธภัณฑ์ชุมชนเมืองลำพูน"
      },
      {
        "id": "4600",
        "name": "วัดพระธาตุหริภุญชัยวรมหาวิหาร"
      },
      {
        "id": "4602",
        "name": "พิพิธภัณฑสถานแห่งชาติหริภุญไชย"
      },
      {
        "id": "4604",
        "name": "อนุสาวรีย์พระนางจามเทวี"
      },
      {
        "id": "4605",
        "name": "Khao Lak"
      },
      {
        "id": "4606",
        "name": "Phang nga"
      },
      {
        "id": "4607",
        "name": "Yatch"
      },
      {
        "id": "4608",
        "name": "Transport"
      },
      {
        "id": "4609",
        "name": "Coaches"
      },
      {
        "id": "4611",
        "name": "Kashmir Holidays"
      },
      {
        "id": "4613",
        "name": "วัดป่าสุทธาวาส"
      },
      {
        "id": "4615",
        "name": "วัดพระธาตุเชิงชุมวรวิหาร"
      },
      {
        "id": "4617",
        "name": "บ้านดอนหลวง"
      },
      {
        "id": "4619",
        "name": "วัดหนองเงือก"
      },
      {
        "id": "4621",
        "name": "ชุมชนบ้านท่าแร่"
      },
      {
        "id": "4623",
        "name": "สวนสมเด็จพระศรีนครินทร์"
      },
      {
        "id": "4625",
        "name": "ถนนผ้าคราม"
      },
      {
        "id": "4627",
        "name": "ชุมชนท่องเที่ยวบ้านหนองส่าน"
      },
      {
        "id": "4629",
        "name": "พญาเต่างอย"
      },
      {
        "id": "4631",
        "name": "อุทยานแห่งชาติภูผายล"
      },
      {
        "id": "4633",
        "name": "วัดถ้ำขาม"
      },
      {
        "id": "4635",
        "name": "พระธาตุภูเพ็ก"
      },
      {
        "id": "4637",
        "name": "ชุมชนภูไท"
      },
      {
        "id": "4639",
        "name": "วัดถ้ำผาแด่น"
      },
      {
        "id": "4641",
        "name": "อุทยานแห่งชาติภูพาน"
      },
      {
        "id": "4643",
        "name": "โค้งปิ้งงู"
      },
      {
        "id": "4645",
        "name": "ศูนย์ศึกษาการพัฒนาภูพาน"
      },
      {
        "id": "4657",
        "name": "#veganlicious"
      },
      {
        "id": "4658",
        "name": "#croissant"
      },
      {
        "id": "4659",
        "name": "#cronut"
      },
      {
        "id": "4660",
        "name": " #cookies"
      },
      {
        "id": "4661",
        "name": "#susancroissant"
      },
      {
        "id": "4662",
        "name": "#grannyknowsbest"
      },
      {
        "id": "4663",
        "name": "#freshlybakedeveryminute"
      },
      {
        "id": "4664",
        "name": "#asgrandmadid"
      },
      {
        "id": "4665",
        "name": "#Bakery"
      },
      {
        "id": "4666",
        "name": "#coffee"
      },
      {
        "id": "4668",
        "name": "ปราสาทบ้านพันนา"
      },
      {
        "id": "4670",
        "name": "#Taxibangkok #Rent Car Bangkok with driver #taxi airport Thailand #taxi airport Pattaya #limousine airport Thailand #limousine airport Bangkok #taxi airport Bangkok #Limousine Thailand #Bangkok car rental with driver"
      },
      {
        "id": "4671",
        "name": "#nnslimousine #nnsluxurylimousine #Taxis #Taxi"
      },
      {
        "id": "4678",
        "name": "วิลล่า"
      },
      {
        "id": "4679",
        "name": "โรงแรมห้าดาว"
      },
      {
        "id": "4680",
        "name": "พูลวิลล่าภูเก็ต"
      },
      {
        "id": "4687",
        "name": "sky walk"
      },
      {
        "id": "4688",
        "name": "ปัตตานี "
      },
      {
        "id": "4689",
        "name": "เมืองปัตตานี"
      },
      {
        "id": "4690",
        "name": "รูสะมิแล"
      },
      {
        "id": "4691",
        "name": "สกาย วอร์ก"
      },
      {
        "id": "4692",
        "name": "สกาย วอร์ค"
      },
      {
        "id": "4693",
        "name": "อ่าวปัตตานี"
      },
      {
        "id": "4700",
        "name": "ิิbeautiful restaurant"
      },
      {
        "id": "4701",
        "name": "Great view"
      },
      {
        "id": "4702",
        "name": "Afternoon Tea"
      },
      {
        "id": "4703",
        "name": "Westernfood"
      },
      {
        "id": "4704",
        "name": "delicious food"
      },
      {
        "id": "4705",
        "name": "chalong bay view restaurant"
      },
      {
        "id": "4706",
        "name": "noku phuket"
      },
      {
        "id": "4707",
        "name": "tea time"
      },
      {
        "id": "4709",
        "name": "ถ้ำพระพุทธไสยาสน์"
      },
      {
        "id": "4711",
        "name": "วัดพุทธวนาราม"
      },
      {
        "id": "4713",
        "name": "วัดมหาชัย"
      },
      {
        "id": "4716",
        "name": "วัดถ้ำพวง"
      },
      {
        "id": "4717",
        "name": "วัดถ้ำอภัยดำรงธรรม"
      },
      {
        "id": "4719",
        "name": "พระพุทธรูปยืนมงคล"
      },
      {
        "id": "4721",
        "name": "พิพิธภัณฑ์คุ้มบุญตามทัน"
      },
      {
        "id": "4723",
        "name": "#phuketboatcharters #aimcharters "
      },
      {
        "id": "4725",
        "name": "วนอุทยานโกสัมพี"
      },
      {
        "id": "4727",
        "name": "วัดหนองหูลิง"
      },
      {
        "id": "4730",
        "name": "พระพุทธรูปมิ่งเมือง"
      },
      {
        "id": "4731",
        "name": "พระพุทธรูปสุวรรณมาลี"
      },
      {
        "id": "4733",
        "name": "#GangnamClinic"
      },
      {
        "id": "4734",
        "name": "#Everyonecanbebeautiful"
      },
      {
        "id": "4735",
        "name": "#HairRemoval "
      },
      {
        "id": "4736",
        "name": "#Laser #PicoWay"
      },
      {
        "id": "4737",
        "name": "#Botox #Filler"
      },
      {
        "id": "4739",
        "name": "กู่สันตรัตน์"
      },
      {
        "id": "4740",
        "name": "dive, scuba, diving, ssi, water sport, snorkeling "
      },
      {
        "id": "4742",
        "name": "พิพิธภัณฑสถานแห่งชาติร้อยเอ็ด"
      },
      {
        "id": "4743",
        "name": "toursoongwai"
      },
      {
        "id": "4745",
        "name": "พระธาตุยาคู"
      },
      {
        "id": "4748",
        "name": "Sirinart National Park"
      },
      {
        "id": "4750",
        "name": "หาดกะหลิม"
      },
      {
        "id": "4752",
        "name": "วนอุทยานภูพระ"
      },
      {
        "id": "4754",
        "name": "หมู่บ้านวัฒนธรรมผู้ไทยบ้านโคกโก่ง"
      },
      {
        "id": "4756",
        "name": "หมู่บ้านทอผ้าไหมแพรวาบ้านโพน"
      },
      {
        "id": "4758",
        "name": "วัดวังคำ"
      },
      {
        "id": "4760",
        "name": "เขื่อนลำปาว"
      },
      {
        "id": "4762",
        "name": "รอยเท้าไดโนเสาร์"
      },
      {
        "id": "4764",
        "name": "สะพานเทพสุดา"
      },
      {
        "id": "4767",
        "name": "ภูค่าว"
      },
      {
        "id": "4768",
        "name": "วัดพุทธนิมิต"
      },
      {
        "id": "4770",
        "name": "พิพิธภัณฑ์สิรินธร"
      },
      {
        "id": "4772",
        "name": "อุทยานแห่งชาติตาดโตน"
      },
      {
        "id": "4774",
        "name": "มอหินขาว"
      },
      {
        "id": "4779",
        "name": "elephant"
      },
      {
        "id": "4780",
        "name": "tours"
      },
      {
        "id": "4781",
        "name": "zipline"
      },
      {
        "id": "4783",
        "name": "น้ำผุดทัพลาว"
      },
      {
        "id": "4785",
        "name": "อุทยานแห่งชาติป่าหินงาม"
      },
      {
        "id": "4787",
        "name": "อุทยานแห่งชาติไทรทอง"
      },
      {
        "id": "4789",
        "name": "ศาลเจ้าพ่อพระยาแล"
      },
      {
        "id": "4791",
        "name": "เขื่อนจุฬาภรณ์"
      },
      {
        "id": "4793",
        "name": "เขตรักษาพันธุ์สัตว์ป่าภูเขียว"
      },
      {
        "id": "4797",
        "name": "Mala, Hotpot, Mahachai, Suki, Mahachaihotpot, Samutsakhon, Malasamutsakhon"
      },
      {
        "id": "4798",
        "name": "fitness "
      },
      {
        "id": "4799",
        "name": "wellness"
      },
      {
        "id": "4800",
        "name": "meditation"
      },
      {
        "id": "4801",
        "name": "retreat"
      },
      {
        "id": "4802",
        "name": "healthy food"
      },
      {
        "id": "4803",
        "name": "coaching"
      },
      {
        "id": "4806",
        "name": "อุทยานพระพิฆเนศ"
      },
      {
        "id": "4807",
        "name": "เขาช่องลม"
      },
      {
        "id": "4809",
        "name": "เขื่อนขุนด่านปราการชล"
      },
      {
        "id": "4811",
        "name": "วัดมณีวงศ์"
      },
      {
        "id": "4813",
        "name": "โรงเรียนนายร้อยพระจุลจอมเกล้า"
      },
      {
        "id": "4815",
        "name": "บึงละหาน"
      },
      {
        "id": "4817",
        "name": "TourPhuket"
      },
      {
        "id": "4819",
        "name": "วัดเขานางบวช"
      },
      {
        "id": "4821",
        "name": "ศูนย์การเรียนรู้ภูกะเหรี่ยง"
      },
      {
        "id": "4823",
        "name": "น้ำตกนางรอง"
      },
      {
        "id": "4825",
        "name": "พุทธสถานจีเต็กลิ้ม"
      },
      {
        "id": "4827",
        "name": "อุทยานแห่งชาติเขาใหญ่"
      },
      {
        "id": "4829",
        "name": "วัดรัตนเนตตาราม"
      },
      {
        "id": "4831",
        "name": "อุทยานแห่งชาติทับลาน"
      },
      {
        "id": "4833",
        "name": "กลุ่มโบราณสถานสระมรกต"
      },
      {
        "id": "4835",
        "name": "โบราณสถานเมืองศรีมโหสถ"
      },
      {
        "id": "4837",
        "name": "ต้นโพธิ์ศรีมหาโพธิ"
      },
      {
        "id": "4839",
        "name": "วัดโคกอู่ทอง"
      },
      {
        "id": "4842",
        "name": "วัดซำปอกง"
      },
      {
        "id": "4843",
        "name": "วัดอุภัยภาติการาม"
      },
      {
        "id": "4845",
        "name": "วัดสมานรัตนาราม"
      },
      {
        "id": "4847",
        "name": "วัดวีระโชติธรรมาราม"
      },
      {
        "id": "4854",
        "name": "cabaret"
      },
      {
        "id": "4855",
        "name": "siamdragon"
      },
      {
        "id": "4856",
        "name": "show"
      },
      {
        "id": "4857",
        "name": "siamdragonshow"
      },
      {
        "id": "4858",
        "name": "chiangmainightlife"
      },
      {
        "id": "4859",
        "name": "Huay Kaew Road"
      },
      {
        "id": "4861",
        "name": "วัดพุทธพรหมยาน"
      },
      {
        "id": "4863",
        "name": "วัดโพธิ์ศรี "
      },
      {
        "id": "4864",
        "name": "สิงห์บุรี"
      },
      {
        "id": "4866",
        "name": "โบราณสถานเตาเผาแม่น้ำน้อย "
      },
      {
        "id": "4868",
        "name": "วัดไทร "
      },
      {
        "id": "4872",
        "name": "Wat Sawang Arom"
      },
      {
        "id": "4873",
        "name": "วัดสว่างอารมณ์ "
      },
      {
        "id": "4876",
        "name": "5starshotel"
      },
      {
        "id": "4877",
        "name": "hotelinsongkhla"
      },
      {
        "id": "4880",
        "name": "Thewalai Phra Phrom (Brahma Worship Place)"
      },
      {
        "id": "4881",
        "name": "เทวาลัยพระพรหม "
      },
      {
        "id": "4884",
        "name": "Wat Na Phrathat"
      },
      {
        "id": "4885",
        "name": "วัดหน้าพระธาตุ "
      },
      {
        "id": "4888",
        "name": "Wat Amphawan"
      },
      {
        "id": "4889",
        "name": "วัดอัมพวัน "
      },
      {
        "id": "4892",
        "name": "Wat Prachot Tikaram"
      },
      {
        "id": "4893",
        "name": "วัดประโชติการาม "
      },
      {
        "id": "4895",
        "name": "วิสาหกิจชุมชนขนมหวานบ้านทองเอน "
      },
      {
        "id": "4897",
        "name": "กลุ่มจักสานหวายมงคลหมู่บ้านอ่าวยายเกิด "
      },
      {
        "id": "4899",
        "name": "กลุ่มผลิตภัณฑ์จากผ้าบางน้ำเชี่ยว "
      },
      {
        "id": "4901",
        "name": "ชุมชนบ้านดอนตะโหนด "
      },
      {
        "id": "4906",
        "name": "Wat Mai Daeng"
      },
      {
        "id": "4907",
        "name": "Wat Pho Kao Ton "
      },
      {
        "id": "4908",
        "name": "วัดโพธิ์เก้าต้น "
      },
      {
        "id": "4909",
        "name": "วัดไม้แดง "
      },
      {
        "id": "4912",
        "name": "Wat Phikun Thong"
      },
      {
        "id": "4913",
        "name": "วัดพิกุลทอง "
      },
      {
        "id": "4916",
        "name": "Wat Phra Non Chakkrasi Worawihan"
      },
      {
        "id": "4917",
        "name": "วัดพระนอนจักรสีห์วรวิหาร"
      },
      {
        "id": "4919",
        "name": "พระธาตุอินทร์แปลง"
      },
      {
        "id": "4921",
        "name": "วัดป่าหนองชาด"
      },
      {
        "id": "4923",
        "name": "วัดป่าเลไลย์"
      },
      {
        "id": "4925",
        "name": "วัดโพธาราม"
      },
      {
        "id": "4928",
        "name": "นนทบุรี"
      },
      {
        "id": "4929",
        "name": "วัดบรมราชากาญจนาภิเษกอนุสรณ์ "
      },
      {
        "id": "4930",
        "name": "วัดเล่งเน่ยยี่ 2 "
      },
      {
        "id": "4933",
        "name": "ตลาดน้ำไทรน้อย "
      },
      {
        "id": "4934",
        "name": "วัดไทรใหญ่ "
      },
      {
        "id": "4936",
        "name": "วัดเขมาภิรตารามราชวรวิหาร "
      },
      {
        "id": "4938",
        "name": "วัดบางจาก"
      },
      {
        "id": "4940",
        "name": "พุทธสถานเชิงท่าหน้าโบสถ์ "
      },
      {
        "id": "4943",
        "name": "วัดกู้"
      },
      {
        "id": "4944",
        "name": "วัดพระนางเรือล่ม "
      },
      {
        "id": "4946",
        "name": "ตลาดท่าน้ำนนท์ "
      },
      {
        "id": "4948",
        "name": "วัดชลอ "
      },
      {
        "id": "4950",
        "name": "อิมแพ็ค สปีด พาร์ค "
      },
      {
        "id": "4952",
        "name": "ชุมชนท่องเที่ยวบางใหญ่-บ้านบางม่วง "
      },
      {
        "id": "4954",
        "name": "วัดเฉลิมพระเกียรติวรวิหาร "
      },
      {
        "id": "4958",
        "name": "Ko Kret"
      },
      {
        "id": "4959",
        "name": "เกาะเกร็ด "
      },
      {
        "id": "4961",
        "name": "หมอลำหุ่นกระติบ"
      },
      {
        "id": "4964",
        "name": "วัดช่องลม "
      },
      {
        "id": "4965",
        "name": "วัดสุทธิวาตวราราม "
      },
      {
        "id": "4973",
        "name": "activities"
      },
      {
        "id": "4974",
        "name": "transfers"
      },
      {
        "id": "4975",
        "name": "half day tour"
      },
      {
        "id": "4976",
        "name": "full day tour"
      },
      {
        "id": "4977",
        "name": "koh samui tours"
      },
      {
        "id": "4978",
        "name": "excursion"
      },
      {
        "id": "4980",
        "name": "โบราณสถานเวียงลอ"
      },
      {
        "id": "4983",
        "name": "วัดผาธรรมนิมิต"
      },
      {
        "id": "4984",
        "name": "วัดห้วยผาเกี๋ยง"
      },
      {
        "id": "4986",
        "name": "วัดศรีโคมคำ"
      },
      {
        "id": "4988",
        "name": "วัดติโลกอาราม"
      },
      {
        "id": "4990",
        "name": "วัดปากน้ำโจ้โล้"
      },
      {
        "id": "4992",
        "name": "วัดท่าฟ้าใต้"
      },
      {
        "id": "4994",
        "name": "วัดนันตาราม"
      },
      {
        "id": "4996",
        "name": "ข่วงนกยูงไทย"
      },
      {
        "id": "4998",
        "name": "อุทยานแห่งชาติถ้ำสะเกิน"
      },
      {
        "id": "5000",
        "name": "ฝั่งต้าไชยสถาน"
      },
      {
        "id": "5002",
        "name": "อุทยานแห่งชาติดอยภูนาง"
      },
      {
        "id": "5004",
        "name": "อุทยานแห่งชาติภูซาง"
      },
      {
        "id": "5006",
        "name": "พิพิธภัณฑ์บ้านกนกมณี"
      },
      {
        "id": "5008",
        "name": "วัดท่าถนน"
      },
      {
        "id": "5009",
        "name": "prachinburi"
      },
      {
        "id": "5011",
        "name": "สกายวอล์คห้วยน้ำรี"
      },
      {
        "id": "5013",
        "name": "เขื่อนสิริกิติ์"
      },
      {
        "id": "5015",
        "name": "วัดพระแท่นศิลาอาสน์"
      },
      {
        "id": "5017",
        "name": "ตลาดถนนวันวานเมืองลับแล"
      },
      {
        "id": "5019",
        "name": "พิพิธภัณฑ์เมืองลับแล"
      },
      {
        "id": "5021",
        "name": "อำเภอลับแล"
      },
      {
        "id": "5023",
        "name": "พิพิธภัณฑ์บ้านเกิดพระยาพิชัยดาบหัก"
      },
      {
        "id": "5026",
        "name": "vacay"
      },
      {
        "id": "5027",
        "name": "vacaythailand"
      },
      {
        "id": "5029",
        "name": "Bloom"
      },
      {
        "id": "5032",
        "name": "น้ำตกชาติตระการ"
      },
      {
        "id": "5033",
        "name": "อุทยานแห่งชาติน้ำตกชาติตระการ"
      },
      {
        "id": "5035",
        "name": "สวนป่าเขากระยาง"
      },
      {
        "id": "5037",
        "name": "น้ำตกแก่งซอง"
      },
      {
        "id": "5041",
        "name": "ImperialPhitsanulok"
      },
      {
        "id": "5042",
        "name": "Hotel Phitsanulok "
      },
      {
        "id": "5043",
        "name": " Room Phitsanulok "
      },
      {
        "id": "5047",
        "name": "Raweekanlaya"
      },
      {
        "id": "5048",
        "name": "Hotel Raweekanlaya"
      },
      {
        "id": "5049",
        "name": "Hotel Bangkok"
      },
      {
        "id": "5053",
        "name": "Imperial River House"
      },
      {
        "id": "5054",
        "name": "Hotel Chiang Rai"
      },
      {
        "id": "5055",
        "name": "Room Chiang Rai"
      },
      {
        "id": "5061",
        "name": "Imperial Korat"
      },
      {
        "id": "5062",
        "name": "Hotel Korat"
      },
      {
        "id": "5063",
        "name": "Room Korat"
      },
      {
        "id": "5064",
        "name": "Korat"
      },
      {
        "id": "5065",
        "name": "Hotel Nakon Ratchasima"
      },
      {
        "id": "5066",
        "name": "Nakon Ratchasima"
      },
      {
        "id": "5072",
        "name": "Imperial Mae Hong Son"
      },
      {
        "id": "5073",
        "name": "Hotel Mae Hong Son"
      },
      {
        "id": "5074",
        "name": "Room Mae Hong Son"
      },
      {
        "id": "5075",
        "name": "Hotel North"
      },
      {
        "id": "5077",
        "name": "เขาล่องเรือตาหมื่น"
      },
      {
        "id": "5083",
        "name": "Imperial Phukaew"
      },
      {
        "id": "5084",
        "name": "Hotel Khao Kho"
      },
      {
        "id": "5085",
        "name": "Room Khao Kho"
      },
      {
        "id": "5086",
        "name": "Room"
      },
      {
        "id": "5087",
        "name": "Hotel Phetchabun"
      },
      {
        "id": "5093",
        "name": "Imperial Narathiwat"
      },
      {
        "id": "5094",
        "name": "Hotel Narathiwat"
      },
      {
        "id": "5095",
        "name": "Room Narathiwat"
      },
      {
        "id": "5096",
        "name": "Narathiwat"
      },
      {
        "id": "5098",
        "name": "ถ้ำนาคา"
      },
      {
        "id": "5100",
        "name": "Phuket resort"
      },
      {
        "id": "5101",
        "name": "phuket villa"
      },
      {
        "id": "5102",
        "name": "Naiyang Beach"
      },
      {
        "id": "5105",
        "name": "Phuket beachfront resort"
      },
      {
        "id": "5107",
        "name": "วัดภูพนมดี"
      },
      {
        "id": "5109",
        "name": "แก่งหินขัน"
      },
      {
        "id": "5111",
        "name": "บ้านเมล่อน"
      },
      {
        "id": "5113",
        "name": "วัดพระเหลาเทพนิมิต"
      },
      {
        "id": "5115",
        "name": "วัดอำนาจ"
      },
      {
        "id": "5117",
        "name": "จุดชมวิวหินช้างสี"
      },
      {
        "id": "5124",
        "name": "#taxi airport Pattaya #limousine airport Thailand #limousine airport Bangkok #taxi airport Bangkok #Limousine Thailand #Bangkok car rental with driver #nnsluxurylimousine #nnstaxi #nnsdriver #nnspattaya #nnschaingmai"
      },
      {
        "id": "5125",
        "name": "#pattaya "
      },
      {
        "id": "5126",
        "name": "#bangkok"
      },
      {
        "id": "5127",
        "name": "#chaingmai"
      },
      {
        "id": "5128",
        "name": "#huahin"
      },
      {
        "id": "5129",
        "name": "#khaokor"
      },
      {
        "id": "5130",
        "name": "#khaoyai"
      },
      {
        "id": "5131",
        "name": "#kanchanaburi"
      },
      {
        "id": "5132",
        "name": "#chonburi"
      },
      {
        "id": "5133",
        "name": "#ayuthaya"
      },
      {
        "id": "5135",
        "name": "วัดถ้ำเอราวัณ"
      },
      {
        "id": "5137",
        "name": "บ้านท่าลาด"
      },
      {
        "id": "5139",
        "name": "ชุมชนท่องเที่ยวตาดไฮ"
      },
      {
        "id": "5141",
        "name": "หาดโนนยาว"
      },
      {
        "id": "5143",
        "name": "วัดภูถ้วยทอง"
      },
      {
        "id": "5144",
        "name": "best esim for thailand"
      },
      {
        "id": "5145",
        "name": "esim thailand"
      },
      {
        "id": "5146",
        "name": "data plans for thailand"
      },
      {
        "id": "5147",
        "name": "international esim for thailand"
      },
      {
        "id": "5149",
        "name": "ถ้ำศรีธน"
      },
      {
        "id": "5151",
        "name": "วัดถ้ำผาเจาะ"
      },
      {
        "id": "5153",
        "name": "วัดหนองตะเคียน"
      },
      {
        "id": "5155",
        "name": "วัดป่าศรีมงคลรัตนาราม"
      },
      {
        "id": "5157",
        "name": "จุดชมวิวผาพญากูปรี"
      },
      {
        "id": "5159",
        "name": "วัดไพรพัฒนา"
      },
      {
        "id": "5161",
        "name": "Wat Phra Thong"
      },
      {
        "id": "5163",
        "name": "Katu"
      },
      {
        "id": "5165",
        "name": "ผามออีแดง"
      },
      {
        "id": "5166",
        "name": "อุทยานแห่งชาติเขาพระวิหาร"
      },
      {
        "id": "5169",
        "name": "Trat City Pillar Shrine"
      },
      {
        "id": "5170",
        "name": "ศาลเจ้าพ่อหลักเมือง"
      },
      {
        "id": "5172",
        "name": "ปราสาทสระกำแพงน้อย"
      },
      {
        "id": "5174",
        "name": "วัดสระกำแพงใหญ่"
      },
      {
        "id": "5176",
        "name": "พระธาตุเรืองรอง"
      },
      {
        "id": "5178",
        "name": "วัดล้านขวด"
      },
      {
        "id": "5180",
        "name": "ศาลหลักเมืองยโสธร"
      },
      {
        "id": "5182",
        "name": "วัดศรีบึงบูรพ์"
      },
      {
        "id": "5184",
        "name": "วัดบ้านด่าน"
      },
      {
        "id": "5186",
        "name": "ปราสาทปรางค์กู่"
      },
      {
        "id": "5191",
        "name": "Onlinebooking "
      },
      {
        "id": "5192",
        "name": "B2B"
      },
      {
        "id": "5193",
        "name": "B2C"
      },
      {
        "id": "5195",
        "name": "วัดย่อเหนือ"
      },
      {
        "id": "5197",
        "name": "วัดพระพุทธบาทยโสธร"
      },
      {
        "id": "5199",
        "name": "พิพิธภัณฑ์มาลัยข้าวตอก"
      },
      {
        "id": "5201",
        "name": "บ้านศรีฐาน"
      },
      {
        "id": "5203",
        "name": "วัดศรีธรรมาราม"
      },
      {
        "id": "5205",
        "name": "พระธาตุก่องข้าวน้อย"
      },
      {
        "id": "5207",
        "name": "ชุมชนบ้านทุ่งนางโอก"
      },
      {
        "id": "5209",
        "name": "ชุมชนบ้านนาสะไมย์"
      },
      {
        "id": "5211",
        "name": "ย่านเมืองเก่าบ้านสิงห์ท่า"
      },
      {
        "id": "5213",
        "name": "อุทยานสวรรค์วิมานพญาแถน"
      },
      {
        "id": "5214",
        "name": "บึงบอระเพ็ด"
      },
      {
        "id": "5216",
        "name": "หอชมเมืองนครสวรรค์"
      },
      {
        "id": "5218",
        "name": "วัดศรีอุทุมพร"
      },
      {
        "id": "5220",
        "name": "วัดคีรีวงศ์"
      },
      {
        "id": "5222",
        "name": "ฟาร์มแกะทหารช่าง"
      },
      {
        "id": "5224",
        "name": "พิพิธภัณฑ์จันเสน"
      },
      {
        "id": "5225",
        "name": "Thai Travel Store"
      },
      {
        "id": "5226",
        "name": "Amazing New Chapters"
      },
      {
        "id": "5228",
        "name": "พิพิธภัณฑ์เซรามิกธนบดี"
      },
      {
        "id": "5230",
        "name": "ศาลเจ้าพ่อนาคราช"
      },
      {
        "id": "5232",
        "name": "เมืองโบราณจันเสน"
      },
      {
        "id": "5234",
        "name": "วัดพระธาตุจอมปิง"
      },
      {
        "id": "5236",
        "name": "วัดพระธาตุลำปางหลวง"
      },
      {
        "id": "5238",
        "name": "วัดศรีรองเมือง"
      },
      {
        "id": "5240",
        "name": "วัดเชียงราย"
      },
      {
        "id": "5242",
        "name": "เขื่อนกิ่วลม"
      },
      {
        "id": "5244",
        "name": "พิพิธภัณฑ์การเรียนรู้เมืองลำปาง"
      },
      {
        "id": "5246",
        "name": "ดอยฟ้างาม"
      },
      {
        "id": "5248",
        "name": "วัดจองคำ"
      },
      {
        "id": "5250",
        "name": "ศาลเจ้าพ่อประตูผา"
      },
      {
        "id": "5252",
        "name": "อุทยานแห่งชาติถ้ำผาไท"
      },
      {
        "id": "5255",
        "name": "ถ้ำผากล้วย"
      },
      {
        "id": "5256",
        "name": "วัดรัตนคูหา"
      },
      {
        "id": "5259",
        "name": "Chae Son National Park"
      },
      {
        "id": "5260",
        "name": "อุทยานแห่งชาติแจ้ซ้อน"
      },
      {
        "id": "5262",
        "name": "อุทยานแห่งชาติแม่วะ"
      },
      {
        "id": "5264",
        "name": "วัดสังกัสรัตนคีรี"
      },
      {
        "id": "5266",
        "name": "รถม้าลำปาง"
      },
      {
        "id": "5268",
        "name": "วัดเขาถ้ำประทุน"
      },
      {
        "id": "5270",
        "name": "วนอุทยานถ้ำเขาวง"
      },
      {
        "id": "5272",
        "name": "วัดถ้ำเขาวง"
      },
      {
        "id": "5274",
        "name": "แหล่งทอผ้าพื้นเมืองบ้านโคกหม้อ"
      },
      {
        "id": "5276",
        "name": "ฝายกั้นน้ำปางสวรรค์"
      },
      {
        "id": "5278",
        "name": "ต้นไม้ยักษ์"
      },
      {
        "id": "5280",
        "name": "บ้านชายเขา"
      },
      {
        "id": "5282",
        "name": "วิสาหกิจชุมชนบ้านริมคลองโฮมสเตย์ "
      },
      {
        "id": "5283",
        "name": "สมุทรสงคราม"
      },
      {
        "id": "5286",
        "name": "ค่ายบางกุ้ง"
      },
      {
        "id": "5287",
        "name": "โบสถ์ปรกโพธิ์ "
      },
      {
        "id": "5289",
        "name": "ตลาดร่มหุบ "
      },
      {
        "id": "5293",
        "name": "บ้านสวนมะนาวโห่ลุงศิริ "
      },
      {
        "id": "5294",
        "name": "มะม่วงหาวมะนาวโห่"
      },
      {
        "id": "5295",
        "name": "สวนมะนาวโห่ลุงศิริ"
      },
      {
        "id": "5298",
        "name": "#KingPowerMahanakhon "
      },
      {
        "id": "5299",
        "name": "#MahanakhonSkyWalk"
      },
      {
        "id": "5302",
        "name": "บางมูลนาก"
      },
      {
        "id": "5303",
        "name": "ศาลเจ้าพ่อแก้ว"
      },
      {
        "id": "5305",
        "name": "วัดสุขุมาราม"
      },
      {
        "id": "5307",
        "name": "วัดพระพุทธบาทเขาทราย"
      },
      {
        "id": "5309",
        "name": "วัดหนองปลิง"
      },
      {
        "id": "5311",
        "name": "อุทยานแห่งชาติคลองลาน"
      },
      {
        "id": "5313",
        "name": "อุทยานแห่งชาติคลองวังเจ้า"
      },
      {
        "id": "5314",
        "name": "Luxury, "
      },
      {
        "id": "5315",
        "name": "Koh Phangan"
      },
      {
        "id": "5316",
        "name": "Full Moon"
      },
      {
        "id": "5317",
        "name": "5 Star Hotel"
      },
      {
        "id": "5318",
        "name": "Private Beach"
      },
      {
        "id": "5319",
        "name": "Suit"
      },
      {
        "id": "5320",
        "name": "Bathtub"
      },
      {
        "id": "5321",
        "name": "Spa"
      },
      {
        "id": "5322",
        "name": "Massage"
      },
      {
        "id": "5323",
        "name": "High class"
      },
      {
        "id": "5324",
        "name": "Swimming Pool"
      },
      {
        "id": "5325",
        "name": "Full Moon Party"
      },
      {
        "id": "5326",
        "name": "Half Moon Party"
      },
      {
        "id": "5327",
        "name": "Vacation"
      },
      {
        "id": "5328",
        "name": "Wedding"
      },
      {
        "id": "5329",
        "name": "Seaview"
      },
      {
        "id": "5330",
        "name": "Salty Water Pool"
      },
      {
        "id": "5331",
        "name": "Infinity Pool"
      },
      {
        "id": "5338",
        "name": "Asamedicalgroup"
      },
      {
        "id": "5339",
        "name": "Asamedicaltourism"
      },
      {
        "id": "5340",
        "name": "Asa"
      },
      {
        "id": "5343",
        "name": "ตลาดร้อยปีสามชุก"
      },
      {
        "id": "5344",
        "name": "ตลาดสามชุก"
      },
      {
        "id": "5348",
        "name": "IVF"
      },
      {
        "id": "5349",
        "name": "Fertility"
      },
      {
        "id": "5350",
        "name": "Egg Freezing"
      },
      {
        "id": "5351",
        "name": "PGD"
      },
      {
        "id": "5352",
        "name": "PGS"
      },
      {
        "id": "5353",
        "name": "Genetic Screening"
      },
      {
        "id": "5354",
        "name": "IUI"
      },
      {
        "id": "5355",
        "name": "ICSI"
      },
      {
        "id": "5357",
        "name": "วัดพะเยาว์"
      },
      {
        "id": "5359",
        "name": "Amethyst"
      },
      {
        "id": "5360",
        "name": "เขื่อนป่าสักชลสิทธิ์"
      },
      {
        "id": "5362",
        "name": "Songkhla"
      },
      {
        "id": "5365",
        "name": "Trat City Museum"
      },
      {
        "id": "5366",
        "name": "พิพิธภัณฑสถานเมืองตราด"
      },
      {
        "id": "5368",
        "name": "Ban Bang Rong "
      },
      {
        "id": "5370",
        "name": "Sarasin Bridge"
      },
      {
        "id": "5372",
        "name": "Ko Racha Yai"
      },
      {
        "id": "5375",
        "name": "Tailor-made travel"
      },
      {
        "id": "5378",
        "name": "Laem Krating Cape"
      },
      {
        "id": "5379",
        "name": "แหลมกระทิง"
      },
      {
        "id": "5382",
        "name": "วัดถ้ำพระโพธิสัตว์"
      },
      {
        "id": "5384",
        "name": "วัดป่าสว่างบุญ"
      },
      {
        "id": "5385",
        "name": "Yacht Rental "
      },
      {
        "id": "5386",
        "name": "Yacht Charter "
      },
      {
        "id": "5387",
        "name": "Boat Rental "
      },
      {
        "id": "5388",
        "name": "Boat Charter "
      },
      {
        "id": "5389",
        "name": "Wooden Boat "
      },
      {
        "id": "5390",
        "name": "Elephant Sanctuary in Chiang Mai, Elephant Tours Chiang Mai, Elephant Freedom Project, Elephant Sanctuary in Thailand"
      },
      {
        "id": "5392",
        "name": "พระปรางค์สามยอด"
      },
      {
        "id": "5394",
        "name": "Taxi Suratthani Airport  Taxi Donsak Pier  Taxi Suratthani Train Station Taxi Koh Samui Taxi Koh Phangan Taxi Khao Sok. Taxi Ratchaprapha Dam"
      },
      {
        "id": "5397",
        "name": "วัดแรกของอำเภอปาย"
      },
      {
        "id": "5398",
        "name": "วัดศรีดอนชัย "
      },
      {
        "id": "5400",
        "name": "agent"
      },
      {
        "id": "5401",
        "name": "Tourism, Thailand, Pattaya, Krabi, Adventure, Honeymoon, Family trip, Friends Holidays, Beaches, Islands, Coral"
      },
      {
        "id": "5405",
        "name": "#vacay #Vacaythailand #Phuket #Bangkok #ChiangMai #KhonKaen"
      },
      {
        "id": "5406",
        "name": "chaingrai"
      },
      {
        "id": "5407",
        "name": "transfer"
      },
      {
        "id": "5408",
        "name": "transportation "
      },
      {
        "id": "5413",
        "name": "Columbia Pictures"
      },
      {
        "id": "5414",
        "name": "Columbia Pictures Aquaverse"
      },
      {
        "id": "5415",
        "name": "Aquaverse"
      },
      {
        "id": "5416",
        "name": "Waterpark"
      },
      {
        "id": "5417",
        "name": "Themepark"
      },
      {
        "id": "5425",
        "name": "DUBAI"
      },
      {
        "id": "5426",
        "name": "UAE"
      },
      {
        "id": "5427",
        "name": "ADVENTURE PACKAGE"
      },
      {
        "id": "5428",
        "name": "VISA"
      },
      {
        "id": "5429",
        "name": "thailand tours"
      },
      {
        "id": "5430",
        "name": "pattaya packages"
      },
      {
        "id": "5431",
        "name": "tour packages"
      },
      {
        "id": "5432",
        "name": "bangkok packages"
      },
      {
        "id": "5433",
        "name": "hotel booking"
      },
      {
        "id": "5434",
        "name": "sightseeings"
      },
      {
        "id": "5435",
        "name": "Day Tours"
      },
      {
        "id": "5436",
        "name": "Things to do"
      },
      {
        "id": "5437",
        "name": "family friendly"
      },
      {
        "id": "5438",
        "name": "hotel packages"
      },
      {
        "id": "5439",
        "name": "island hopping"
      },
      {
        "id": "5440",
        "name": "tailormade experiences"
      },
      {
        "id": "5441",
        "name": "local insights"
      },
      {
        "id": "5442",
        "name": "responsible tourism"
      },
      {
        "id": "5443",
        "name": "eco friendly"
      },
      {
        "id": "5444",
        "name": "TURN MILES IN TO MEMORIES "
      },
      {
        "id": "5446",
        "name": "บ่อน้ำร้อน"
      },
      {
        "id": "5448",
        "name": "บ้านหาดยาย"
      },
      {
        "id": "5451",
        "name": "จุดชมวิวเขาคอม้า"
      },
      {
        "id": "5452",
        "name": "อุทยานแห่งชาติลำน้ำกระบุรี "
      },
      {
        "id": "5454",
        "name": "เชียงใหม่"
      },
      {
        "id": "5455",
        "name": "ร้านเครื่องเงินวัวลาย"
      },
      {
        "id": "5457",
        "name": "ถ้ำเกร็ดดาว"
      },
      {
        "id": "5458",
        "name": "อุทัยธานี"
      },
      {
        "id": "5460",
        "name": "น้ำตกตาดดาว"
      },
      {
        "id": "5462",
        "name": "เขาปลาร้า"
      },
      {
        "id": "5464",
        "name": "บึงทับแต้"
      },
      {
        "id": "5466",
        "name": "เขาผาแรด"
      },
      {
        "id": "5468",
        "name": "กลุ่มวิสาหกิจชุมชนท่องเที่ยวตำบลระบำ"
      },
      {
        "id": "5470",
        "name": "ภูพญาพ่อ"
      },
      {
        "id": "5471",
        "name": "อุตรดิตถ์"
      },
      {
        "id": "5473",
        "name": "อุทยานแห่งชาติน้ำตกคลองตรอน"
      },
      {
        "id": "5475",
        "name": "ศูนย์ฝึกและพัฒนาอาชีพราษฎรไทยบริเวณชายแดนอุตรดิตถ์"
      },
      {
        "id": "5477",
        "name": "หอวัฒนธรรมวิทยาลัยครูอุตรดิตถ์"
      },
      {
        "id": "5479",
        "name": "ตลาดการค้าชายแดนไทย-ลาว (ตลาดนัดบ้านบ่อเบี้ยหรือตลาดช่องมหาราช) และตลาดผ่อนปรนช่อง ห้วยต่าง"
      },
      {
        "id": "5481",
        "name": "กลุ่มหัตถกรรมผลิตภัณฑ์ผักตบชวา"
      },
      {
        "id": "5483",
        "name": "วัดไผ่ล้อม"
      },
      {
        "id": "5485",
        "name": "วัดผักราก"
      },
      {
        "id": "5487",
        "name": "จุดชมวิวเขาพลึง"
      },
      {
        "id": "5489",
        "name": "วัดธรรมาธิปไตย"
      },
      {
        "id": "5491",
        "name": "อนุสาวรีย์เจ้าพ่อพญาปาด"
      },
      {
        "id": "5493",
        "name": "ชุมชนลาวเวียงบ้านหาดสองแคว"
      },
      {
        "id": "5495",
        "name": "น้ำตกห้วยทรายขาว (อุทยานแห่งชาติศรีสัชนาลัย)"
      },
      {
        "id": "5496",
        "name": "สุโขทัย"
      },
      {
        "id": "5498",
        "name": "วัดไทยชุมพล"
      },
      {
        "id": "5500",
        "name": "โรงพักทรงปั้นหยา"
      },
      {
        "id": "5502",
        "name": "โบราณสถานวัดช้างรอบ"
      },
      {
        "id": "5504",
        "name": "โบราณสถานวัดตระพังทองหลาง"
      },
      {
        "id": "5506",
        "name": "โบราณสถานวัดสวนแก้วอุทยานใหญ่"
      },
      {
        "id": "5508",
        "name": "โบราณสถานวัดชมชื่น"
      },
      {
        "id": "5510",
        "name": "โบราณสถานวัดสวนแก้วอุทยานน้อย"
      },
      {
        "id": "5512",
        "name": "โบราณสถานวัดเขาพนมเพลิง"
      },
      {
        "id": "5514",
        "name": "ชุมชนบ้านทาป่าเปา"
      },
      {
        "id": "5516",
        "name": "โรงงานเตาชวนหลง"
      },
      {
        "id": "5518",
        "name": "ถ้ำเอราวัณ"
      },
      {
        "id": "5520",
        "name": "อ่างเก็บน้ำทาสบเส้า"
      },
      {
        "id": "5522",
        "name": "บ้านหนองช้างคืน"
      },
      {
        "id": "5524",
        "name": "โครงการพระราชดำริบ้านทุ่งจี้"
      },
      {
        "id": "5526",
        "name": "น้ำตกวังแก้ว"
      },
      {
        "id": "5528",
        "name": "อุทยานแห่งชาติดอยจง"
      },
      {
        "id": "5530",
        "name": "บ้านแกะสลัก"
      },
      {
        "id": "5532",
        "name": "อนุสาวรีย์เจ้าพ่อพญาคำลือ"
      },
      {
        "id": "5534",
        "name": "ถนนสายวัฒนธรรม"
      },
      {
        "id": "5536",
        "name": "ชุมชนบ้านแม่แจ๋ม"
      },
      {
        "id": "5538",
        "name": "โป่งน้ำร้อนไทรงาม"
      },
      {
        "id": "5540",
        "name": "ห้วยจอกหลวง"
      },
      {
        "id": "5542",
        "name": "บ่อน้ำร้อนหนองแห้ง"
      },
      {
        "id": "5544",
        "name": "โป่งน้ำร้อนเมืองแปง"
      },
      {
        "id": "5546",
        "name": "น้ำตกแม่อูคอ"
      },
      {
        "id": "5548",
        "name": "อุทยานแห่งชาติแม่เงา"
      },
      {
        "id": "5550",
        "name": "น้ำตกแม่เย็น"
      },
      {
        "id": "5552",
        "name": "น้ำตกผาบ่อง"
      },
      {
        "id": "5554",
        "name": "น้ำตกดาวดึงส์"
      },
      {
        "id": "5556",
        "name": "ถ้ำแม่ละนา"
      },
      {
        "id": "5558",
        "name": "โฮมสเตย์บ้านพะมอลอ"
      },
      {
        "id": "5560",
        "name": "บ้านกะเหรี่ยงแม่สะกั๊วะ"
      },
      {
        "id": "5562",
        "name": "ศูนย์ศิลปาชีพบ้านกะเหรี่ยงแม่ปิง"
      },
      {
        "id": "5564",
        "name": "แพร่"
      },
      {
        "id": "5565",
        "name": "วัดพระธาตุหนองจันทร์"
      },
      {
        "id": "5567",
        "name": "หลวงพ่อแสนแซ่ วัดเด่นชัย"
      },
      {
        "id": "5569",
        "name": "ศูนย์วิจัยและพัฒนาการเกษตรแพร่"
      },
      {
        "id": "5571",
        "name": "อ่างเก็บน้ำแม่สอง"
      },
      {
        "id": "5573",
        "name": "อ่างเก็บน้ำแม่สาย"
      },
      {
        "id": "5575",
        "name": "น้ำตกแม่พุงหลวง"
      },
      {
        "id": "5577",
        "name": "น้ำตกห้วยโรง (น้ำตกห้วยลง)"
      },
      {
        "id": "5579",
        "name": "จินเจอร์เบรด เฮ้าส์ แกลเลอรี"
      },
      {
        "id": "5581",
        "name": "วิสาหกิจชุมชนบ้านทุ่งเจริญหม้อห้อมย้อมสีธรรมชาติ"
      },
      {
        "id": "5583",
        "name": "ชุมชนบ้านข่วงบุก"
      },
      {
        "id": "5585",
        "name": "วัดพระธาตุดงลาน"
      },
      {
        "id": "5587",
        "name": "พระพุทธจักรล้านนาไทย"
      },
      {
        "id": "5589",
        "name": "เพชรบูรณ์"
      },
      {
        "id": "5590",
        "name": "ไร่ชนิกา"
      },
      {
        "id": "5592",
        "name": "สวนภูพนา"
      },
      {
        "id": "5594",
        "name": "สวนป่าหิมพานต์"
      },
      {
        "id": "5596",
        "name": "ดงรอยเท้าไดโนเสาร์"
      },
      {
        "id": "5598",
        "name": "พุน้ำร้อนน้ำแร่บ้านครู"
      },
      {
        "id": "5600",
        "name": "วัดป่าภูทับเบิก"
      },
      {
        "id": "5602",
        "name": "น้ำตกไผ่สีทอง"
      },
      {
        "id": "5603",
        "name": "พิษณุโลก"
      },
      {
        "id": "5605",
        "name": "พิจิตร"
      },
      {
        "id": "5606",
        "name": "พิพิธภัณฑ์เมืองพิจิตร"
      },
      {
        "id": "5608",
        "name": "ทุ่งดอกกระเจียวยักษ์"
      },
      {
        "id": "5610",
        "name": "วนอุทยานนครไชยบวร"
      },
      {
        "id": "5612",
        "name": "วัดใหม่ปลายห้วย"
      },
      {
        "id": "5614",
        "name": "กลุ่มทอผ้าบ้านหนองพง"
      },
      {
        "id": "5616",
        "name": "วัดโรงช้าง"
      },
      {
        "id": "5618",
        "name": "ศาลหลักเมืองจังหวัดพิจิตร"
      },
      {
        "id": "5620",
        "name": "เกาะศรีมาลา"
      },
      {
        "id": "5622",
        "name": "พิพิธภัณฑ์บ้านเก่าเสาปั้นจั่น"
      },
      {
        "id": "5624",
        "name": "พิพิธภัณฑ์บ้านหลวงประเทืองคดี"
      },
      {
        "id": "5626",
        "name": "ชุมชนวัดดงกลาง"
      },
      {
        "id": "5628",
        "name": "วัดศรีศรัทธาราม"
      },
      {
        "id": "5630",
        "name": "ตลาดบางมูลนาก"
      },
      {
        "id": "5632",
        "name": "Street Art ตะพานหิน"
      },
      {
        "id": "5634",
        "name": "พิพิธภัณฑ์ล้านปี"
      },
      {
        "id": "5636",
        "name": "เขตรักษาพันธุ์สัตว์ป่าเวียงลอ"
      },
      {
        "id": "5638",
        "name": "หนองเล็งทราย"
      },
      {
        "id": "5640",
        "name": "บ้านดินคำปู้จู้"
      },
      {
        "id": "5642",
        "name": "วัดพระธาตุจอมทอง"
      },
      {
        "id": "5644",
        "name": "น่าน"
      },
      {
        "id": "5645",
        "name": "บ้านดอนมูล"
      },
      {
        "id": "5647",
        "name": "วังกาบรางธรรมสถาน"
      },
      {
        "id": "5649",
        "name": "บ้านหาดผาขน"
      },
      {
        "id": "5651",
        "name": "หมู่บ้านไทลื้อหนองบัว"
      },
      {
        "id": "5653",
        "name": "ตลาดชายแดนบ้านห้วยโก๋น"
      },
      {
        "id": "5655",
        "name": "บ้านสันเจริญ"
      },
      {
        "id": "5657",
        "name": "น้ำตกภูฟ้า"
      },
      {
        "id": "5659",
        "name": "ถ้ำผาฆ้อง"
      },
      {
        "id": "5660",
        "name": "คุ้มเจ้าราชบุตร"
      },
      {
        "id": "5662",
        "name": "อาคารประวัติศาสตร์อำเภอเวียงสา"
      },
      {
        "id": "5664",
        "name": "น้ำตกตาดม่าน"
      },
      {
        "id": "5666",
        "name": "ถนนคนเดินกาดข่วงเมืองน่าน"
      },
      {
        "id": "5667",
        "name": "วัดภูเก็ต"
      },
      {
        "id": "5669",
        "name": "ดงแม่นางเมือง"
      },
      {
        "id": "5670",
        "name": "นครสวรรค์"
      },
      {
        "id": "5672",
        "name": "เขาพระเจดีย์"
      },
      {
        "id": "5674",
        "name": "น้ำตกซับสมบูรณ์"
      },
      {
        "id": "5676",
        "name": "วัดพรหมนิมิต"
      },
      {
        "id": "5678",
        "name": "วัดมหาโพธิใต้"
      },
      {
        "id": "5680",
        "name": "เขาพระ-เขาสูง"
      },
      {
        "id": "5682",
        "name": "ศูนย์แสดงเครื่องปั้นดินเผาบ้านมอญ"
      },
      {
        "id": "5684",
        "name": "ศาลาที่ประทับ ร.5 หน้าวัดเขื่อนแดง"
      },
      {
        "id": "5686",
        "name": "สวนกล้วยไม้พิไลพร"
      },
      {
        "id": "5688",
        "name": "ถ้ำเขาจั๊กจั่น"
      },
      {
        "id": "5690",
        "name": "สระทะเล"
      },
      {
        "id": "5692",
        "name": "น้ำตกวังน้ำวิ่ง"
      },
      {
        "id": "5694",
        "name": "ชุมชนชาวไทยทรงดำบ้านไผ่สิงห์"
      },
      {
        "id": "5696",
        "name": "กลุ่มทอผ้าบ้านท่ามะกรูด"
      },
      {
        "id": "5698",
        "name": "วัดป่าหัวตลุกวนาราม"
      },
      {
        "id": "5700",
        "name": "วัดหนองกลับ"
      },
      {
        "id": "5702",
        "name": "แหล่งโบราณคดีวัดโพธิ์ประสาท"
      },
      {
        "id": "5704",
        "name": "วัดช่องแค"
      },
      {
        "id": "5706",
        "name": "ตลาดเก่าร้อยปีชุมแสง"
      },
      {
        "id": "5708",
        "name": "พิพิธภัณฑ์เฉลิมพระเกียรติจังหวัดตาก"
      },
      {
        "id": "5709",
        "name": "วัดชัยชนะสงคราม"
      },
      {
        "id": "5711",
        "name": "น้ำตกมูเซอ"
      },
      {
        "id": "5713",
        "name": "บ่อน้ำร้อนแม่กาษา"
      },
      {
        "id": "5715",
        "name": "ดอยทูเล"
      },
      {
        "id": "5717",
        "name": "น้ำตกเซปละ"
      },
      {
        "id": "5719",
        "name": "เนินพิศวง"
      },
      {
        "id": "5721",
        "name": "แม่น้ำเมย"
      },
      {
        "id": "5723",
        "name": "ศูนย์การเรียนรู้บ้านปากร้องห้วยจี้"
      },
      {
        "id": "5725",
        "name": "กาดต้าตง"
      },
      {
        "id": "5727",
        "name": "เมืองเก่าท่าสองยาง"
      },
      {
        "id": "5729",
        "name": "วัดสมเด็จพระนารายณ์มหาราช"
      },
      {
        "id": "5731",
        "name": "เชียงราย"
      },
      {
        "id": "5732",
        "name": "ท่าเรือบั๊ค"
      },
      {
        "id": "5734",
        "name": "วัดดอยอินทรีย์"
      },
      {
        "id": "5736",
        "name": "ศาลพระเจ้าจี้กง"
      },
      {
        "id": "5738",
        "name": "พระธาตุจอมคีรี"
      },
      {
        "id": "5740",
        "name": "ศาลสมเด็จพระนเรศวรมหาราช"
      },
      {
        "id": "5742",
        "name": "เมืองโบราณเวียงกาหลง"
      },
      {
        "id": "5744",
        "name": "บ่อน้ำพุร้อนธรรมชาติ"
      },
      {
        "id": "5746",
        "name": "แม่น้ำกก"
      },
      {
        "id": "5748",
        "name": "วนอุทยานน้ำตกตาดควัน"
      },
      {
        "id": "5750",
        "name": "หอศิลป์ไตยวน"
      },
      {
        "id": "5752",
        "name": "วัดศรีบุญเรือง"
      },
      {
        "id": "5754",
        "name": "โบราณสถานพระเจ้ากือนา"
      },
      {
        "id": "5756",
        "name": "เชียงรายไนท์บาซาร์"
      },
      {
        "id": "5758",
        "name": "วัดพระธาตุจอมสัก"
      },
      {
        "id": "5760",
        "name": "ชัยนาท"
      },
      {
        "id": "5761",
        "name": "วัดสรรพยาวัฒนาราม"
      },
      {
        "id": "5766",
        "name": "Donsak"
      },
      {
        "id": "5767",
        "name": "Ko Raet"
      },
      {
        "id": "5768",
        "name": "เกาะแรต"
      },
      {
        "id": "5769",
        "name": "ดอนสัก"
      },
      {
        "id": "5771",
        "name": "ภูตาจอ"
      },
      {
        "id": "5773",
        "name": "โบราณสถานวัดช้างล้อม (อุทยานประวัติศาสตร์ศรีสัชนาลัย)"
      },
      {
        "id": "5774",
        "name": "ศรีสัชนาลัย"
      },
      {
        "id": "5776",
        "name": "วัดช้างรอบ อุทยานประวัติศาสตร์กำแพงเพชร"
      },
      {
        "id": "5778",
        "name": "ช้างล้อม"
      },
      {
        "id": "5782",
        "name": "Three Bay Viewpoint"
      },
      {
        "id": "5783",
        "name": "จุดชมวิวสามอ่าว"
      },
      {
        "id": "5784",
        "name": "สามอ่าว"
      },
      {
        "id": "5785",
        "name": "expat"
      },
      {
        "id": "5786",
        "name": "black travel"
      },
      {
        "id": "5802",
        "name": "thai elephants "
      },
      {
        "id": "5803",
        "name": "elephant tour"
      },
      {
        "id": "5804",
        "name": "attraction near me"
      },
      {
        "id": "5805",
        "name": "attraction must visit in Chiang mai"
      },
      {
        "id": "5806",
        "name": "the best price"
      },
      {
        "id": "5807",
        "name": "full day elephant "
      },
      {
        "id": "5808",
        "name": "half day elephant"
      },
      {
        "id": "5809",
        "name": "babies elephants"
      },
      {
        "id": "5810",
        "name": "chokchai elephant camp"
      },
      {
        "id": "5811",
        "name": "coffee near me"
      },
      {
        "id": "5813",
        "name": "ภูสะนาว"
      },
      {
        "id": "5815",
        "name": "ขุนฝางสวนม้าโฮมสเตย์"
      },
      {
        "id": "5820",
        "name": "#health #wellness #medical-clinic"
      },
      {
        "id": "5821",
        "name": "#anti-aging #stemcell #detoxification #chelation #detox #healthandwellness  "
      },
      {
        "id": "5823",
        "name": "สะพานแตปูซู"
      },
      {
        "id": "5825",
        "name": "ทะเลหมอกฆูนุงซีลีปัต"
      },
      {
        "id": "5827",
        "name": "น้ำตกเฉลิมพระเกียรติ ร.9"
      },
      {
        "id": "5830",
        "name": "Piyamit Tunnel"
      },
      {
        "id": "5831",
        "name": "อุโมงค์ปิยะมิตร"
      },
      {
        "id": "5834",
        "name": "เบตง"
      },
      {
        "id": "5835",
        "name": "สตรีตอาร์ต"
      },
      {
        "id": "5837",
        "name": "พิพิธภัณฑ์เมืองเบตง"
      },
      {
        "id": "5839",
        "name": "อุโมงค์เบตงมงคลฤทธิ์"
      },
      {
        "id": "5842",
        "name": "Wat Phutiwhat"
      },
      {
        "id": "5843",
        "name": "วัดพุทธาธิวาส"
      },
      {
        "id": "5846",
        "name": "ศาลเจ้าแม่ลิ้มกอเหนี่ยว"
      },
      {
        "id": "5847",
        "name": "ศาลเจ้าเล่งจูเกียง"
      },
      {
        "id": "5849",
        "name": "มัสยิดกลางจังหวัดปัตตานี"
      },
      {
        "id": "5851",
        "name": "Burapabn"
      },
      {
        "id": "5853",
        "name": "Burapa villa hotel."
      },
      {
        "id": "5855",
        "name": "North Burapa Pattaya sai3."
      },
      {
        "id": "5857",
        "name": "Burapa bird’s nest."
      },
      {
        "id": "5859",
        "name": "Make Burapa bird’s nest."
      },
      {
        "id": "5861",
        "name": "Platinum Burapa bird’s nest."
      },
      {
        "id": "5871",
        "name": "Phuket Muslim Tour"
      },
      {
        "id": "5872",
        "name": "Krabi Muslim Tour"
      },
      {
        "id": "5873",
        "name": "Phuket Tour Packages"
      },
      {
        "id": "5874",
        "name": "Krabi Tour Packages"
      },
      {
        "id": "5875",
        "name": "James Bond island tour"
      },
      {
        "id": "5876",
        "name": "Phang Nga Bay Tour"
      },
      {
        "id": "5877",
        "name": "Bangkok Muslim Tour"
      },
      {
        "id": "5879",
        "name": "Pratunam Burapa bird’s nest."
      },
      {
        "id": "5890",
        "name": "Steaks"
      },
      {
        "id": "5891",
        "name": "Imported"
      },
      {
        "id": "5892",
        "name": "ImportedSteaks"
      },
      {
        "id": "5893",
        "name": "Ribeye"
      },
      {
        "id": "5894",
        "name": "Picanha"
      },
      {
        "id": "5895",
        "name": "Sirloin"
      },
      {
        "id": "5896",
        "name": "Tenderloin"
      },
      {
        "id": "5897",
        "name": "SousVide"
      },
      {
        "id": "5898",
        "name": "Sukhumvit"
      },
      {
        "id": "5899",
        "name": "Recommend"
      },
      {
        "id": "5901",
        "name": "ย่านเมืองเก่าสายบุรี"
      },
      {
        "id": "5903",
        "name": "แหลมตาชี"
      },
      {
        "id": "5905",
        "name": "หาดตะโละกาโปร์"
      },
      {
        "id": "5908",
        "name": "สายบุรี"
      },
      {
        "id": "5909",
        "name": "หาดวาสุกรี"
      },
      {
        "id": "5912",
        "name": "วัดช้างให้"
      },
      {
        "id": "5913",
        "name": "วัดราษฎร์บูรณะ"
      },
      {
        "id": "5915",
        "name": "หาดบ้านกระจูด"
      },
      {
        "id": "5917",
        "name": "cat cafe"
      },
      {
        "id": "5918",
        "name": "pet cafe"
      },
      {
        "id": "5919",
        "name": "pet friendly"
      },
      {
        "id": "5921",
        "name": "อุทยานแห่งชาติดอยหลวง"
      },
      {
        "id": "5923",
        "name": "เขาพะเนินทุ่ง"
      },
      {
        "id": "5925",
        "name": "วัดพระธาตุจอมกิตติ"
      },
      {
        "id": "5927",
        "name": "วัดพระธาตุผาเงา"
      },
      {
        "id": "5938",
        "name": "Import"
      },
      {
        "id": "5939",
        "name": "ImpoetSteak"
      },
      {
        "id": "5940",
        "name": "BlackAngus"
      },
      {
        "id": "5941",
        "name": "BlackAngusPicanha"
      },
      {
        "id": "5942",
        "name": "PicanhaSteak"
      },
      {
        "id": "5943",
        "name": "AustealianSteak"
      },
      {
        "id": "5944",
        "name": "Austealian"
      },
      {
        "id": "5945",
        "name": "DeliveryFood"
      },
      {
        "id": "5946",
        "name": "FoodDelivery"
      },
      {
        "id": "5947",
        "name": "Delivery"
      },
      {
        "id": "5948",
        "name": "Yummy"
      },
      {
        "id": "5951",
        "name": "สามเหลี่ยมทองคำ"
      },
      {
        "id": "5953",
        "name": "บ้านผาหมี"
      },
      {
        "id": "5954",
        "name": "บ้านผาฮี้"
      },
      {
        "id": "5956",
        "name": "วัดป่าสัก"
      },
      {
        "id": "5958",
        "name": "ไร่ชา"
      },
      {
        "id": "5960",
        "name": "ไร่รื่นรมย์"
      },
      {
        "id": "5967",
        "name": "Scuba Diving Phuket"
      },
      {
        "id": "5968",
        "name": "Snorkeling phuket"
      },
      {
        "id": "5969",
        "name": "Phuket island tour"
      },
      {
        "id": "5970",
        "name": "Scuba diving for beginners phuket"
      },
      {
        "id": "5971",
        "name": "PADI Dive Center phuket"
      },
      {
        "id": "5972",
        "name": "PADI dive course phuket"
      },
      {
        "id": "5975",
        "name": "Pha Hin Dam "
      },
      {
        "id": "5976",
        "name": "ผาหินดำ"
      },
      {
        "id": "5982",
        "name": "Beaches"
      },
      {
        "id": "5983",
        "name": "Karon"
      },
      {
        "id": "5984",
        "name": "Kata"
      },
      {
        "id": "5985",
        "name": "กะตะ"
      },
      {
        "id": "5986",
        "name": "กะรน"
      },
      {
        "id": "5987",
        "name": "Luxury DMC Company"
      },
      {
        "id": "5988",
        "name": "Luxury Travel Thailand"
      },
      {
        "id": "5990",
        "name": "ชายหาดนราทัศน์"
      },
      {
        "id": "5992",
        "name": "ปากแม่น้ำบางนรา"
      },
      {
        "id": "5995",
        "name": "พระพุทธทักษิณมิ่งมงคล"
      },
      {
        "id": "5996",
        "name": "พุทธอุทยานเขากง"
      },
      {
        "id": "5999",
        "name": "เกาะยาว"
      },
      {
        "id": "6000",
        "name": "สะพานคอย 100 ปี"
      },
      {
        "id": "6002",
        "name": "วัดชลธาราสิงเห"
      },
      {
        "id": "6003",
        "name": "We bring Thailand to the world."
      },
      {
        "id": "6005",
        "name": "ที่กางเต็นท์"
      },
      {
        "id": "6006",
        "name": "Tourism Tech "
      },
      {
        "id": "6007",
        "name": "Marketing Tech"
      },
      {
        "id": "6011",
        "name": "มัสยิด300ปี"
      },
      {
        "id": "6012",
        "name": "มัสยิดตะโละมาเนาะ"
      },
      {
        "id": "6013",
        "name": "มัสยิดวาดีอัลฮูเซ็น"
      },
      {
        "id": "6016",
        "name": "สุไหงปาดี"
      },
      {
        "id": "6017",
        "name": "อุทยานแห่งชาติบูโด"
      },
      {
        "id": "6020",
        "name": "ชุมชนท่องเที่ยวภูเขาทอง"
      },
      {
        "id": "6021",
        "name": "บ้านภูเขาทอง"
      },
      {
        "id": "6023",
        "name": "ตึกเจ้าพระยาอภัยภูเบศร"
      },
      {
        "id": "6025",
        "name": "ภูมิภูเบศร"
      },
      {
        "id": "6033",
        "name": "#travellocal "
      },
      {
        "id": "6034",
        "name": "#muslimfriendly"
      },
      {
        "id": "6035",
        "name": "#tourforsenior "
      },
      {
        "id": "6036",
        "name": "#sustainability"
      },
      {
        "id": "6037",
        "name": "#tourismforall"
      },
      {
        "id": "6038",
        "name": "#lowcarbontours"
      },
      {
        "id": "6039",
        "name": "#locallifestyle"
      },
      {
        "id": "6040",
        "name": "#phuketlocal"
      },
      {
        "id": "6048",
        "name": "#Local Phuket"
      },
      {
        "id": "6049",
        "name": "#Local Andaman"
      },
      {
        "id": "6050",
        "name": "# Southern Communities"
      },
      {
        "id": "6051",
        "name": "#Sustainable Community"
      },
      {
        "id": "6052",
        "name": "#Aging Travel"
      },
      {
        "id": "6053",
        "name": "#Muslim Friendly"
      },
      {
        "id": "6054",
        "name": "#tourism for all"
      },
      {
        "id": "6061",
        "name": "Ban Thammachat Lang "
      },
      {
        "id": "6062",
        "name": "Khlong Yai Subdistrict "
      },
      {
        "id": "6063",
        "name": "Tourism Community Venture"
      },
      {
        "id": "6064",
        "name": "ตำบลคลองใหญ่ "
      },
      {
        "id": "6065",
        "name": "บ้านธรรมชาติล่าง"
      },
      {
        "id": "6066",
        "name": "วิสาหกิจชุมชนท่องเที่ยว"
      },
      {
        "id": "6069",
        "name": "Ban Laem Makham "
      },
      {
        "id": "6070",
        "name": "บ้านแหลมมะขาม "
      },
      {
        "id": "6073",
        "name": "Ban Nam Chiao Tourism Community Venture "
      },
      {
        "id": "6074",
        "name": "บ้านน้ำเชี่ยว "
      },
      {
        "id": "6075",
        "name": "วิสาหกิจชุมชนท่องเที่ยวบ้านน้ำเชี่ยว "
      },
      {
        "id": "6078",
        "name": "Hat Sai Dam "
      },
      {
        "id": "6079",
        "name": "หาดทรายดำ"
      },
      {
        "id": "6081",
        "name": "All of these wonderful sights and adventures await you with the warmest welcome from Bella Nara Phuket Naiyang Beach"
      },
      {
        "id": "6083",
        "name": "เรือหลวงพระร่วง"
      },
      {
        "id": "6084",
        "name": "ศาลกรมหลวงชุมพรเขตอุดมศักดิ์"
      },
      {
        "id": "6088",
        "name": "ชุมชนบ้านทอน"
      },
      {
        "id": "6089",
        "name": "หาดบ้านทอน"
      },
      {
        "id": "6091",
        "name": "ตลาดไทยย้อนยุคบ้านระจัน "
      },
      {
        "id": "6093",
        "name": "เขตห้ามล่าสัตว์ป่าดูนลำพัน"
      },
      {
        "id": "6095",
        "name": "เทวสถานองค์พระพิฆเนศ"
      },
      {
        "id": "6097",
        "name": "Long-stay residence"
      },
      {
        "id": "6100",
        "name": "Southern Thailand"
      },
      {
        "id": "6101",
        "name": " Khao Sok"
      },
      {
        "id": "6102",
        "name": "Nakhon Si Thammarat"
      },
      {
        "id": "6103",
        "name": "Phatthalung"
      },
      {
        "id": "6104",
        "name": "Pai"
      },
      {
        "id": "6107",
        "name": "ศาลเจ้าแม่ทับทิมท่าฬ่อ"
      },
      {
        "id": "6109",
        "name": "บึงสีไฟ"
      },
      {
        "id": "6111",
        "name": "วัดท่าหลวง"
      },
      {
        "id": "6118",
        "name": "cafekhaoyai"
      },
      {
        "id": "6119",
        "name": "cafehopping"
      },
      {
        "id": "6120",
        "name": "restaurantkhaoyai"
      },
      {
        "id": "6121",
        "name": "playgroundkhaoyai"
      },
      {
        "id": "6122",
        "name": "newrestaurant"
      },
      {
        "id": "6123",
        "name": "waterplaygroundkhaoyai"
      },
      {
        "id": "6124",
        "name": "moyardkhaoyai"
      },
      {
        "id": "6125",
        "name": "familyrestaurant"
      },
      {
        "id": "6127",
        "name": "the north of thailand "
      },
      {
        "id": "6129",
        "name": "VISIT CHIANG MAI"
      },
      {
        "id": "6130",
        "name": "วัดเขาสมิง"
      },
      {
        "id": "6136",
        "name": "bangkok private tour"
      },
      {
        "id": "6137",
        "name": "dress code grand palace"
      },
      {
        "id": "6138",
        "name": "railway market"
      },
      {
        "id": "6139",
        "name": "temples in bangkok"
      },
      {
        "id": "6142",
        "name": "https://www.jos-herb.com/"
      },
      {
        "id": "6143",
        "name": "shopee.co.th/josherb"
      },
      {
        "id": "6144",
        "name": "Koh Samui Restaurant"
      },
      {
        "id": "6145",
        "name": "International Dishes"
      },
      {
        "id": "6146",
        "name": "Beachfront Dining"
      },
      {
        "id": "6150",
        "name": "Golf"
      },
      {
        "id": "6151",
        "name": "golf course"
      },
      {
        "id": "6152",
        "name": "golf club"
      },
      {
        "id": "6153",
        "name": "Golf holiday"
      },
      {
        "id": "6155",
        "name": "ปราสาทพนมวัน"
      },
      {
        "id": "6157",
        "name": "พิพิธภัณฑ์ไม้กลายเป็นหิน"
      },
      {
        "id": "6159",
        "name": "พิพิธภัณฑ์เมืองนครราชสีมา"
      },
      {
        "id": "6160",
        "name": "อนุสาวรีย์ท้าวสุรนารี"
      },
      {
        "id": "6162",
        "name": "วัดพระนารายณ์มหาราช"
      },
      {
        "id": "6164",
        "name": "#Sukhumvit #Centrepoint #CentrePointSukhumvit10 #AlwaysaGoodTime"
      },
      {
        "id": "6168",
        "name": "พระธาตุแช่แห้ง"
      },
      {
        "id": "6169",
        "name": "พระธาตุประจำปีเกิด"
      },
      {
        "id": "6170",
        "name": "ปีเถาะ"
      },
      {
        "id": "6173",
        "name": "ดอยสกาด"
      },
      {
        "id": "6174",
        "name": "ดอยภูคา"
      },
      {
        "id": "6176",
        "name": "กำแพงเมือง"
      },
      {
        "id": "6180",
        "name": "ข่วงเมืองน่าน"
      },
      {
        "id": "6181",
        "name": "ปู่ม่านย่าม่าน"
      },
      {
        "id": "6182",
        "name": "วัดภูมินทร์"
      },
      {
        "id": "6183",
        "name": "ภาพกระซิบรัก"
      },
      {
        "id": "6187",
        "name": "งาช้างดำ"
      },
      {
        "id": "6188",
        "name": "ซุ้มลีลาวดี"
      },
      {
        "id": "6189",
        "name": "วัดน้อย"
      },
      {
        "id": "6191",
        "name": "วัดพระธาตุช้างค้ำ"
      },
      {
        "id": "6195",
        "name": "อุดรธานี"
      },
      {
        "id": "6196",
        "name": "ภูพระบาท"
      },
      {
        "id": "6197",
        "name": "ใบเสมา"
      },
      {
        "id": "6198",
        "name": "มรดกโลก"
      },
      {
        "id": "6200",
        "name": "กำแพงเมืองเก่า"
      },
      {
        "id": "6203",
        "name": "นครชัยศรี"
      },
      {
        "id": "6204",
        "name": "กำแพงแสน"
      },
      {
        "id": "6205",
        "name": "ดูนก"
      },
      {
        "id": "6207",
        "name": "ปราสาทเมืองเก่า"
      },
      {
        "id": "6209",
        "name": "ชิโน-ยูโรเปียน"
      },
      {
        "id": "6211",
        "name": "ไกรทอง"
      },
      {
        "id": "6214",
        "name": "เวสาลี"
      },
      {
        "id": "6215",
        "name": "สมัยทวารวดี"
      },
      {
        "id": "6217",
        "name": "ท่าสองยาง"
      },
      {
        "id": "6218",
        "name": "โบราณสถาน"
      },
      {
        "id": "6219",
        "name": "ระยอง"
      },
      {
        "id": "6220",
        "name": "สุพรรณบุรี"
      },
      {
        "id": "6222",
        "name": "ย่านเมืองเก่า"
      },
      {
        "id": "6223",
        "name": "ตลาดสดตะลุบัน"
      },
      {
        "id": "6227",
        "name": "บ้านสิงห์ท่า"
      },
      {
        "id": "6228",
        "name": "ปลาส้ม"
      },
      {
        "id": "6229",
        "name": "ลอดช่องยโสธร"
      },
      {
        "id": "6232",
        "name": "ตะกั่วป่า"
      },
      {
        "id": "6233",
        "name": "ถนนคนเดิน"
      },
      {
        "id": "6236",
        "name": "KAPIWHAN"
      },
      {
        "id": "6237",
        "name": "KAPIWHANPRANBURI"
      },
      {
        "id": "6239",
        "name": "สวนสัตว์นครราชสีมา"
      },
      {
        "id": "6241",
        "name": "วัดป่าสาลวัน"
      },
      {
        "id": "6243",
        "name": "วัดศาลาลอย"
      },
      {
        "id": "6246",
        "name": "พิพิธภัณฑ์หลวงพ่อคูณ"
      },
      {
        "id": "6247",
        "name": "วัดบ้านไร่"
      },
      {
        "id": "6250",
        "name": "หมู่บ้านเครื่องปั้นดินเผาด่านเกวียน"
      },
      {
        "id": "6253",
        "name": "#satitdannok"
      },
      {
        "id": "6254",
        "name": "#satitgrandview"
      },
      {
        "id": "6256",
        "name": "Marriott"
      },
      {
        "id": "6257",
        "name": "Marriott Executive Apartments"
      },
      {
        "id": "6258",
        "name": "Marriott Executive Apartments Sukhumvit Park Bangkok"
      },
      {
        "id": "6259",
        "name": "MEASukhumvitPark"
      },
      {
        "id": "6260",
        "name": "Serviced Apartment Hotel"
      },
      {
        "id": "6268",
        "name": "#10600Riverside"
      },
      {
        "id": "6270",
        "name": "TAGTHAi"
      },
      {
        "id": "6271",
        "name": "ฟาร์มโชคชัย"
      },
      {
        "id": "6273",
        "name": "ไร่ทองสมบูรณ์คลับ"
      },
      {
        "id": "6275",
        "name": "#Homestay "
      },
      {
        "id": "6278",
        "name": "ไร่องุ่น"
      },
      {
        "id": "6279",
        "name": "ไร่องุ่นอำเภอปากช่อง"
      },
      {
        "id": "6281",
        "name": "บ้านหมากม่วง"
      },
      {
        "id": "6283",
        "name": "สวนแม่หม่อน"
      },
      {
        "id": "6285",
        "name": "ชุมชนบ้านสุขสมบูรณ์"
      },
      {
        "id": "6287",
        "name": "เขตห้ามล่าสัตว์ป่าเขาแผงม้า"
      },
      {
        "id": "6289",
        "name": "อควาเรียภูเก็ต"
      },
      {
        "id": "6291",
        "name": "Camin Cuisine & Cafe's"
      },
      {
        "id": "6295",
        "name": "Longevity medicine"
      },
      {
        "id": "6296",
        "name": "anti-aging"
      },
      {
        "id": "6297",
        "name": "Stem cells"
      },
      {
        "id": "6298",
        "name": "Stem cells therapy"
      },
      {
        "id": "6300",
        "name": "Travel, Thailand, Tourism, Destination, Management, Company, Travel, Packages, Travel, Services, Hotels, Tours, Unique, Experiences, Cultural, Tourism, Unforgettable, Journeys"
      },
      {
        "id": "6301",
        "name": "Thailand DMC"
      },
      {
        "id": "6302",
        "name": "Thailand inbound tours"
      },
      {
        "id": "6303",
        "name": "B2B travel services,"
      },
      {
        "id": "6304",
        "name": "B2B travel services"
      },
      {
        "id": "6305",
        "name": "travel management"
      },
      {
        "id": "6306",
        "name": "inbound travel"
      },
      {
        "id": "6307",
        "name": "Thailand tourism"
      },
      {
        "id": "6308",
        "name": "TAT OFFICIAL,"
      },
      {
        "id": "6309",
        "name": "customized tours"
      },
      {
        "id": "6310",
        "name": "inbound tour operator"
      },
      {
        "id": "6311",
        "name": "inbound tours"
      },
      {
        "id": "6312",
        "name": "luxury tours"
      },
      {
        "id": "6313",
        "name": "mice tours,"
      },
      {
        "id": "6314",
        "name": "mice"
      },
      {
        "id": "6315",
        "name": "tat official "
      },
      {
        "id": "6316",
        "name": "travel managements"
      },
      {
        "id": "6317",
        "name": "Photography"
      },
      {
        "id": "6318",
        "name": "Small Group"
      },
      {
        "id": "6319",
        "name": "Experience"
      },
      {
        "id": "6320",
        "name": "Photo Tour"
      },
      {
        "id": "6321",
        "name": "Medical Vacation"
      },
      {
        "id": "6322",
        "name": "MedicalTourismThailand"
      },
      {
        "id": "6323",
        "name": "MedicalCareAbroad"
      },
      {
        "id": "6324",
        "name": "ThailandHealthPackages"
      },
      {
        "id": "6325",
        "name": "BangkokHealthService"
      },
      {
        "id": "6326",
        "name": "HospitalToursThailand"
      },
      {
        "id": "6327",
        "name": "WellnessTravelThailand"
      },
      {
        "id": "6328",
        "name": "HealthCheckBangkok"
      },
      {
        "id": "6329",
        "name": "BangkokMedicalSupport"
      },
      {
        "id": "6330",
        "name": "WellnessRetreatsThailand"
      },
      {
        "id": "6331",
        "name": "HealthcareJourneyThailand"
      },
      {
        "id": "6332",
        "name": "BangkokMedicalTreatment"
      },
      {
        "id": "6333",
        "name": "ThailandHealthTours"
      },
      {
        "id": "6335",
        "name": "ถนนคนเดินตรอกโรงยา"
      },
      {
        "id": "6337",
        "name": "ชุมชนชาวแพสะแกกรัง"
      },
      {
        "id": "6339",
        "name": "อ่างน้ำผุดบางสวรรค์"
      },
      {
        "id": "6341",
        "name": "วัดดอนสัก"
      },
      {
        "id": "6353",
        "name": "สยามนิรมิต"
      },
      {
        "id": "6354",
        "name": "การแสดงภูเก็ต"
      },
      {
        "id": "6355",
        "name": "ประสบการณ์ทางวัฒนธรรม"
      },
      {
        "id": "6356",
        "name": "ประวัติศาสตร์ไทย"
      },
      {
        "id": "6357",
        "name": "กิจกรรมตามปรศิลปะการแสดงะเพณี"
      },
      {
        "id": "6358",
        "name": "กิจกรรมตามประเพณี"
      },
      {
        "id": "6359",
        "name": "ศิลปะการแสดง"
      },
      {
        "id": "6360",
        "name": "หมู่บ้านไทย"
      },
      {
        "id": "6361",
        "name": "อาหารริมทาง"
      },
      {
        "id": "6362",
        "name": "เทคนิคพิเศษ"
      },
      {
        "id": "6363",
        "name": "มรดกทางศิลปะ"
      },
      {
        "id": "6365",
        "name": "วัดเขาสุวรรณประดิษฐ์"
      },
      {
        "id": "6367",
        "name": "ปากน้ำกะแดะ"
      },
      {
        "id": "6369",
        "name": "Ethical Elephant Sanctuary Chiang Mai"
      },
      {
        "id": "6370",
        "name": "Elephant Tours Chiang Mai"
      },
      {
        "id": "6374",
        "name": "Bangkok Limo"
      },
      {
        "id": "6375",
        "name": "Bangkok Transfer"
      },
      {
        "id": "6376",
        "name": "Bangkok Transport"
      },
      {
        "id": "6377",
        "name": "Bangkok Limousine"
      },
      {
        "id": "6379",
        "name": "น้ำตกธารทอง"
      },
      {
        "id": "6381",
        "name": "สวนสนุกดรีมเวิลด์"
      },
      {
        "id": "6387",
        "name": "Northen"
      },
      {
        "id": "6388",
        "name": "ThaiNorth"
      },
      {
        "id": "6389",
        "name": "Khaosoi"
      },
      {
        "id": "6390",
        "name": "Noodle"
      },
      {
        "id": "6391",
        "name": " Northern Sausage"
      },
      {
        "id": "6393",
        "name": "สะพานแขวนเขาพัง"
      },
      {
        "id": "6396",
        "name": "บ้านถ้ำผึ้ง"
      },
      {
        "id": "6397",
        "name": "กลุ่มท่องเที่ยวเชิงอนุรักษ์บ้านถ้ำผึ้ง"
      },
      {
        "id": "6401",
        "name": "ล่องแพไม้ไผ่คลองศก"
      },
      {
        "id": "6402",
        "name": "ล่องแพไม้ไผ่"
      },
      {
        "id": "6403",
        "name": "คลองศก"
      },
      {
        "id": "6405",
        "name": "วัดพระพุทธฉาย"
      },
      {
        "id": "6407",
        "name": "ล่องแก่งคลองยัน"
      },
      {
        "id": "6409",
        "name": "อุทยานแห่งชาติแก่งกรุง"
      },
      {
        "id": "6411",
        "name": "สวนดอกเบญจมาศบิ๊กเต้"
      },
      {
        "id": "6413",
        "name": "น้ำตกเจ็ดสาวน้อย"
      },
      {
        "id": "6415",
        "name": "วัดถ้ำกระบอก"
      },
      {
        "id": "6417",
        "name": "วัดพระพุทธบาทราชวรมหาวิหาร"
      },
      {
        "id": "6419",
        "name": "สวนพฤกษศาสตร์พุแค"
      },
      {
        "id": "6422",
        "name": "ไร่มัลเบอร์รี"
      },
      {
        "id": "6423",
        "name": "ฟาร์มสายทอง"
      },
      {
        "id": "6426",
        "name": "น้ำตกสามหลั่น"
      },
      {
        "id": "6427",
        "name": "อ่างเก็บน้ำเขารวก"
      },
      {
        "id": "6429",
        "name": "ตลาดหัวปลี"
      },
      {
        "id": "6431",
        "name": "น้ำตกเหวน้อย"
      },
      {
        "id": "6435",
        "name": "เจ็ดคด"
      },
      {
        "id": "6436",
        "name": "โป่งก้อนเส้า"
      },
      {
        "id": "6437",
        "name": "อ่างเก็บน้ำซับป่าว่าน"
      },
      {
        "id": "6442",
        "name": "Travel planning"
      },
      {
        "id": "6443",
        "name": "App"
      },
      {
        "id": "6444",
        "name": "Budget"
      },
      {
        "id": "6445",
        "name": "Manage"
      },
      {
        "id": "6446",
        "name": "Free"
      },
      {
        "id": "6448",
        "name": "ชุมชนบ้านหาดไก่ต้อย"
      },
      {
        "id": "6450",
        "name": "อุทยานแห่งชาติลำน้ำน่าน"
      },
      {
        "id": "6452",
        "name": "พิพิธภัณฑ์บ่อเหล็กน้ำพี้"
      },
      {
        "id": "6454",
        "name": "พิพิธภัณฑ์ผ้าทอตีนจก"
      },
      {
        "id": "6456",
        "name": "บ้านพระยาสุรสีห์วิสิษฐศักดิ์"
      },
      {
        "id": "6458",
        "name": "วัดพระบรมธาตุทุ่งยั้ง"
      },
      {
        "id": "6460",
        "name": "อุทยานแห่งชาติภูสอยดาว"
      },
      {
        "id": "6465",
        "name": "essential oil"
      },
      {
        "id": "6466",
        "name": "aroma oil"
      },
      {
        "id": "6467",
        "name": "pure essential oil"
      },
      {
        "id": "6468",
        "name": "herb extract"
      },
      {
        "id": "6474",
        "name": "Tour Phuket"
      },
      {
        "id": "6475",
        "name": "Trip Phuket"
      },
      {
        "id": "6476",
        "name": "tour phi phi"
      },
      {
        "id": "6490",
        "name": "Sustainable Tourism"
      },
      {
        "id": "6491",
        "name": "Muslim-Friendly Travel"
      },
      {
        "id": "6492",
        "name": "Accessible Tourism"
      },
      {
        "id": "6493",
        "name": "Inclusive Travel"
      },
      {
        "id": "6494",
        "name": "Small Group Travel"
      },
      {
        "id": "6495",
        "name": "Community Tourism"
      },
      {
        "id": "6500",
        "name": "Wisdom"
      },
      {
        "id": "6501",
        "name": "WisdomRayong"
      },
      {
        "id": "6502",
        "name": "Residence"
      },
      {
        "id": "6505",
        "name": "ศาลเจ้าพ่อเทพารักษ์"
      },
      {
        "id": "6506",
        "name": "เจ้าแม่ทับทิม"
      },
      {
        "id": "6508",
        "name": "ศาลเจ้าพ่อเจ้าแม่ชุมแสง"
      },
      {
        "id": "6510",
        "name": "ตลาดเจ้าค่ะ"
      },
      {
        "id": "6516",
        "name": "#TravelLocalWithJTS"
      },
      {
        "id": "6517",
        "name": "#AndamanHiddenGems"
      },
      {
        "id": "6518",
        "name": "#MuslimFriendlyTravel"
      },
      {
        "id": "6519",
        "name": "#InclusiveTravelExperiences"
      },
      {
        "id": "6520",
        "name": "#TravelForAll"
      },
      {
        "id": "6522",
        "name": "เขาหน่อเขาแก้ว"
      },
      {
        "id": "6524",
        "name": "ศูนย์ผ้าทอลายโบราณบ้านผาทั่ง"
      },
      {
        "id": "6526",
        "name": "ตลาดซาวไฮ่"
      },
      {
        "id": "6528",
        "name": "ชุมชนผ้าทอมือลายโบราณบ้านโคกหม้อ"
      },
      {
        "id": "6529",
        "name": "วัดพระบรมธาตุ"
      },
      {
        "id": "6531",
        "name": "วัดหนองโพ"
      },
      {
        "id": "6533",
        "name": "วนอุทยานถ้ำเพชร-ถ้ำทอง"
      },
      {
        "id": "6538",
        "name": "Mailbox rental Hua Hin"
      },
      {
        "id": "6539",
        "name": "Package shipping Hua Hin"
      },
      {
        "id": "6540",
        "name": "Copy, print, and scan services"
      },
      {
        "id": "6541",
        "name": "Visa and passport photos"
      },
      {
        "id": "6543",
        "name": "วัดอุโปสถาราม"
      },
      {
        "id": "6544",
        "name": "Travel phuket"
      },
      {
        "id": "6545",
        "name": "tours phuket"
      },
      {
        "id": "6546",
        "name": "Holiday Phuket"
      },
      {
        "id": "6547",
        "name": "day trip phuket"
      },
      {
        "id": "6549",
        "name": "ควายนาคาเฟ"
      },
      {
        "id": "6551",
        "name": "เขตห้ามล่าสัตว์ป่าถ้ำประทุน"
      },
      {
        "id": "6553",
        "name": "วัดจันทาราม"
      },
      {
        "id": "6555",
        "name": "เกาะเทโพ"
      },
      {
        "id": "6557",
        "name": "ชุมชนบ้านท่าโพ"
      },
      {
        "id": "6559",
        "name": "วัดจันทรังษี"
      },
      {
        "id": "6561",
        "name": "วัดต้นสน"
      },
      {
        "id": "6563",
        "name": "วัดสังกระต่าย"
      },
      {
        "id": "6565",
        "name": "ศาลหลักเมืองจังหวัดอ่างทอง"
      },
      {
        "id": "6566",
        "name": "#YourJourneyStartsHere #TravelBeyondLimits #ExploreTheWorldWithUs #AdventureAwaits #TailoredTravel #WanderDiscoverExplore #MakeTravelMemories #TravelDreamsComeTrue #SeamlessJourneys #PassportToTheWorld #UnleashYourWanderlust #ExperienceTheWorld #TravelMad"
      },
      {
        "id": "6568",
        "name": "พิพิธภัณฑ์ภาพถ่ายพระราชพิธีบรมราชาภิเษก"
      },
      {
        "id": "6569",
        "name": "Itinerary planning, tour customization, client relationship management, and extensive destination knowledge, sports-themed travel, corporate incentive trips, group travel coordination, travel booking and logistics, customer service, event planning, travel"
      },
      {
        "id": "6571",
        "name": "ศูนย์ตุ๊กตาชาววังบ้านบางเสด็จ"
      },
      {
        "id": "6573",
        "name": "วัดท่าสุทธาวาส"
      },
      {
        "id": "6575",
        "name": "หมู่บ้านทำกลองตำบลเอกราช"
      },
      {
        "id": "6577",
        "name": "อนุสาวรีย์พันท้ายนรสิงห์"
      },
      {
        "id": "6578",
        "name": "วัดปราสาท"
      },
      {
        "id": "6580",
        "name": "ลานอิสรภาพ ๑๐๙"
      },
      {
        "id": "6582",
        "name": "วัดป่าโมกวรวิหาร"
      },
      {
        "id": "6584",
        "name": "อนุสาวรีย์นายดอกนายทองแก้ว"
      },
      {
        "id": "6586",
        "name": "วัดอ้อย"
      },
      {
        "id": "6588",
        "name": "อนุสาวรีย์ขุนรองปลัดชู"
      },
      {
        "id": "6590",
        "name": "วัดสี่ร้อย"
      },
      {
        "id": "6593",
        "name": "ตลาดเก่าวิเศษชัยชาญ"
      },
      {
        "id": "6594",
        "name": "ตลาดศาลเจ้าโรงทอง"
      },
      {
        "id": "6596",
        "name": "วัดนางในธัมมิการาม"
      },
      {
        "id": "6598",
        "name": "วัดม่วง"
      },
      {
        "id": "6600",
        "name": "บ้านหุ่นเหล็ก"
      },
      {
        "id": "6602",
        "name": "พิพิธภัณฑ์ตำนานเมืองอ่างทอง"
      },
      {
        "id": "6605",
        "name": "#AGoldenKissbyKlimt #ImmersiveArt #gustavklimt #artexhibition #bangkokart"
      },
      {
        "id": "6606",
        "name": "#EMTOWERArt #mediadistrictbkk #mustvisit #hangouts #holidate #bangkok #goodvibes #sukhumvit"
      },
      {
        "id": "6608",
        "name": "hotelpatong"
      },
      {
        "id": "6609",
        "name": "patongbeach"
      },
      {
        "id": "6614",
        "name": "Online souveniers"
      },
      {
        "id": "6615",
        "name": "Calendar"
      },
      {
        "id": "6616",
        "name": "Coffee Cup"
      },
      {
        "id": "6617",
        "name": "Poster"
      },
      {
        "id": "6619",
        "name": "พญานาคปู่องค์ดำ"
      },
      {
        "id": "6621",
        "name": "สวนแมน"
      },
      {
        "id": "6623",
        "name": "พระตำหนักคำหยาด"
      },
      {
        "id": "6625",
        "name": "หมู่บ้านจักสานบางเจ้าฉ่า"
      },
      {
        "id": "6627",
        "name": "วัดท่าอิฐ"
      },
      {
        "id": "6629",
        "name": "วัดบ้านพราน"
      },
      {
        "id": "6636",
        "name": "royal galaxy cruise"
      },
      {
        "id": "6637",
        "name": "royalgalaxycruise"
      },
      {
        "id": "6638",
        "name": "dinner cruise"
      },
      {
        "id": "6639",
        "name": "dinner cruise bangkok"
      },
      {
        "id": "6640",
        "name": "dinnercruise"
      },
      {
        "id": "6641",
        "name": "dinnership"
      },
      {
        "id": "6642",
        "name": "buffetdinnercruise"
      },
      {
        "id": "6643",
        "name": "asiatique"
      },
      {
        "id": "6644",
        "name": "royal princess cruise"
      },
      {
        "id": "6645",
        "name": "river cruise"
      },
      {
        "id": "6647",
        "name": "จุดชมวิวม่อนสน"
      },
      {
        "id": "6649",
        "name": "แปลงปลูกสตรอเบอรีหมู่บ้านนอแล"
      },
      {
        "id": "6650",
        "name": "สถานีเกษตรหลวงอ่างขาง"
      },
      {
        "id": "6652",
        "name": "อุทยานแห่งชาติดอยผ้าห่มปก"
      },
      {
        "id": "6654",
        "name": "กาดเกรียงไกรมาหามิตร"
      },
      {
        "id": "6656",
        "name": "น้ำพุร้อนสันกำแพง"
      },
      {
        "id": "6658",
        "name": "กาดบะป๊าว"
      },
      {
        "id": "6660",
        "name": "หอประวัติศาสตร์เชียงใหม่"
      },
      {
        "id": "6662",
        "name": "อ่างเก็บน้ำแม่ธิ"
      },
      {
        "id": "6664",
        "name": "พระพุทธบาทสามยอด"
      },
      {
        "id": "6666",
        "name": "นั่งรถรางชมเมืองลำพูน"
      },
      {
        "id": "6668",
        "name": "Street Art ลำพูน"
      },
      {
        "id": "6670",
        "name": "วัดกู่กุด"
      },
      {
        "id": "6675",
        "name": "พุทธอุทยานเพชบุระ"
      },
      {
        "id": "6676",
        "name": "พระพุทธมหาธรรมราชา"
      },
      {
        "id": "6677",
        "name": "Phetchabura Buddhist Park"
      },
      {
        "id": "6678",
        "name": "อุทยานแห่งชาติแม่เมย"
      },
      {
        "id": "6682",
        "name": "วัดผาซ่อนแก้ว"
      },
      {
        "id": "6683",
        "name": "วัดพระธาตุผาซ่อนแก้ว"
      },
      {
        "id": "6684",
        "name": "Wat Phra That Pha Son Kaew"
      },
      {
        "id": "6685",
        "name": "เขาค้อ"
      },
      {
        "id": "6687",
        "name": "วัดมณีไพรสณฑ์"
      },
      {
        "id": "6689",
        "name": "ทุ่งกังหันลม"
      },
      {
        "id": "6691",
        "name": "สะพานมิตรภาพไทยพม่า"
      },
      {
        "id": "6695",
        "name": "หล่มศักดิ์"
      },
      {
        "id": "6696",
        "name": "หล่มสัก"
      },
      {
        "id": "6697",
        "name": "Lomsak Museum"
      },
      {
        "id": "6701",
        "name": "อินทราชัย"
      },
      {
        "id": "6702",
        "name": "หอโบราณคดี"
      },
      {
        "id": "6703",
        "name": "หอโบราณคดีอินทราชัย"
      },
      {
        "id": "6707",
        "name": "ทุ่งแสลงหลวง"
      },
      {
        "id": "6708",
        "name": "ศาลาดุสิตา"
      },
      {
        "id": "6709",
        "name": "พระอาทิตย์ขึ้น"
      },
      {
        "id": "6724",
        "name": "shop"
      },
      {
        "id": "6725",
        "name": "discount"
      },
      {
        "id": "6726",
        "name": "pass"
      },
      {
        "id": "6728",
        "name": "เลยดั้น"
      },
      {
        "id": "6732",
        "name": "ประวัติสาสตร์"
      },
      {
        "id": "6733",
        "name": "ศรีเทพ"
      },
      {
        "id": "6734",
        "name": "อุทยานประวัติสาสตร์ศรีเทพ"
      },
      {
        "id": "6736",
        "name": "เขตรักษาพันธุ์สัตว์ป่าอุ้มผาง"
      },
      {
        "id": "6738",
        "name": "เขื่อนยันฮี"
      },
      {
        "id": "6740",
        "name": "ถ้ำสีฟ้า"
      },
      {
        "id": "6742",
        "name": "วัดสระเกษ"
      },
      {
        "id": "6745",
        "name": "freediving"
      },
      {
        "id": "6747",
        "name": "วัดมณีชลขัณฑ์"
      },
      {
        "id": "6749",
        "name": "วัดพระศรีรัตนมหาธาตุ"
      },
      {
        "id": "6751",
        "name": "พระนารายณ์ราชนิเวศน์"
      },
      {
        "id": "6756",
        "name": "Curating High-End, Exclusive Art Experiences"
      },
      {
        "id": "6757",
        "name": "Contemporary Art"
      },
      {
        "id": "6758",
        "name": "Gallery"
      },
      {
        "id": "6759",
        "name": "Exhibition"
      },
      {
        "id": "6760",
        "name": "Dinner In The Sky"
      },
      {
        "id": "6765",
        "name": "scuba diving"
      },
      {
        "id": "6766",
        "name": "diving trip"
      },
      {
        "id": "6767",
        "name": "liveaboard"
      },
      {
        "id": "6768",
        "name": "day trips"
      },
      {
        "id": "6769",
        "name": "courses"
      },
      {
        "id": "6771",
        "name": "Makro x Lotus's"
      },
      {
        "id": "6773",
        "name": "Makro-Lotus's "
      },
      {
        "id": "6777",
        "name": "Makro-Lotus"
      },
      {
        "id": "6778",
        "name": "Lotus"
      },
      {
        "id": "6779",
        "name": "Makro"
      },
      {
        "id": "6781",
        "name": "Thailand tour"
      },
      {
        "id": "6788",
        "name": "Rembrandt Hotel Bangkok"
      },
      {
        "id": "6789",
        "name": "Hotels in Bangkok "
      },
      {
        "id": "6790",
        "name": "hotels near bts"
      },
      {
        "id": "6791",
        "name": "hotels near mrt"
      },
      {
        "id": "6792",
        "name": "best hotels in bangkok"
      },
      {
        "id": "6793",
        "name": "hotels in asoke"
      },
      {
        "id": "6794",
        "name": "hotels in sukhumvit"
      },
      {
        "id": "6795",
        "name": "hotels near qsncc"
      },
      {
        "id": "6800",
        "name": "Rembrandt Residences Bangkok"
      },
      {
        "id": "6801",
        "name": " Residences in bangkok"
      },
      {
        "id": "6802",
        "name": "Residence sukhumvit"
      },
      {
        "id": "6803",
        "name": "long stay in bangkok"
      },
      {
        "id": "6804",
        "name": "long stay in sukhumvit"
      },
      {
        "id": "6805",
        "name": "best residences location"
      },
      {
        "id": "6806",
        "name": "long stay near qsncc"
      },
      {
        "id": "6808",
        "name": "#TourCompany, #ThailandTours, #TravelThailand, #VIPVan, #TourPackages, #TravelAllThailand, #PhetraAllWay, #PhetraAllWayThailand, #InternationalTours, #DomesticTours, #CruiseTours, #IslandTours, #BeachTours, #CulturalTourism, #NatureTourism, #PrivateTrips,"
      },
      {
        "id": "6811",
        "name": "Muslim"
      },
      {
        "id": "6813",
        "name": "#CPAXTRA #MakroxLotuss #makroxlotuss #Makrothailand #Lotuss"
      },
      {
        "id": "6815",
        "name": "ชุมชนวัฒนธรรมไทยเบิ้งโคกสลุง"
      },
      {
        "id": "6817",
        "name": "thelittleprince"
      },
      {
        "id": "6818",
        "name": "thelittleprinceuniverse"
      },
      {
        "id": "6820",
        "name": "ศูนย์การเรียนรู้บ้านสวนขวัญ"
      },
      {
        "id": "6822",
        "name": "เขาวงพระจันทร์"
      },
      {
        "id": "6824",
        "name": "เขาพระยาเดินธง"
      },
      {
        "id": "6826",
        "name": "กลุ่มผ้าทอนาหมื่นศรี"
      },
      {
        "id": "6828",
        "name": "ปราสาทสด๊กก๊อกธม"
      },
      {
        "id": "6830",
        "name": "TTF2025"
      },
      {
        "id": "6832",
        "name": "ท่าเรือหาดยาว"
      },
      {
        "id": "6834",
        "name": "หาดยาว"
      },
      {
        "id": "6836",
        "name": "หาดหยงหลิง"
      },
      {
        "id": "6839",
        "name": "วนอุทยานบ่อน้ำร้อนกันตัง"
      },
      {
        "id": "6840",
        "name": "บ่อน้ำร้อนควนแคง"
      },
      {
        "id": "6843",
        "name": "หาดปากเมง"
      },
      {
        "id": "6844",
        "name": "ท่าเทียบเรือปากเมง"
      },
      {
        "id": "6846",
        "name": "#CPAXTRA #Makro #MakroSathorn #Makrothailand"
      },
      {
        "id": "6847",
        "name": "Let's Plan 2 Travel!"
      },
      {
        "id": "6849",
        "name": "สวนนกชัยนาท"
      },
      {
        "id": "6851",
        "name": "หาดราชมงคล"
      },
      {
        "id": "6856",
        "name": "lebonheurkhaokho"
      },
      {
        "id": "6857",
        "name": "Khaokhohotel"
      },
      {
        "id": "6858",
        "name": "Campson"
      },
      {
        "id": "6859",
        "name": "Le Bonheur Khaokho"
      },
      {
        "id": "6862",
        "name": "สถาบันวิทยาศาสตร์ทางทะเล"
      },
      {
        "id": "6863",
        "name": "มหาวิทยาลัยบูรพา"
      },
      {
        "id": "6864",
        "name": "Phuket Halal tours, Krabi Halal tours, Bangkok Halal tours, Thailand Halal tours, Hatyai Muslim Tours "
      },
      {
        "id": "6866",
        "name": "#Reverseclub #ReverseX #MousaiReverseClub #MousaiWellness #wellnessbangkok #ชะลอวัย #SkinDetox #IVTherapy #PRPFacial #GlowFromWithin #PartyGlowUp #LuxuryWellness  #RadiantSkinStartsHere #GlowReset #AntiAgingClinic #SkinRejuvenation #BeautyRevival"
      },
      {
        "id": "6867",
        "name": "Thailand Meeting"
      },
      {
        "id": "6868",
        "name": "meetingtourthailand"
      },
      {
        "id": "6869",
        "name": "thailand mice"
      },
      {
        "id": "6870",
        "name": "Phi Phi Islands"
      },
      {
        "id": "6871",
        "name": "James Bond Island"
      },
      {
        "id": "6872",
        "name": "Thailand Hotel"
      },
      {
        "id": "6873",
        "name": "Tour Activity"
      },
      {
        "id": "6874",
        "name": "Rental Car"
      },
      {
        "id": "6875",
        "name": "Bangkok tour"
      },
      {
        "id": "6876",
        "name": "Samui tour"
      },
      {
        "id": "6877",
        "name": "Similan island"
      },
      {
        "id": "6878",
        "name": "phuket package tour"
      },
      {
        "id": "6879",
        "name": "Udonthani Tour"
      },
      {
        "id": "6880",
        "name": "Nongkhai, Laos Tour"
      },
      {
        "id": "6881",
        "name": "Meeting Tour Thailand"
      },
      {
        "id": "6882",
        "name": "Chaing mai tour"
      },
      {
        "id": "6883",
        "name": "Meeting Tour Package"
      },
      {
        "id": "6884",
        "name": "Krabi Package Tour"
      },
      {
        "id": "6885",
        "name": "Samui Travel, tourism"
      },
      {
        "id": "6886",
        "name": "travel thailand"
      },
      {
        "id": "6887",
        "name": "travel bangkok"
      },
      {
        "id": "6888",
        "name": "tour to thailand"
      },
      {
        "id": "6889",
        "name": "holiday bangkok"
      },
      {
        "id": "6890",
        "name": "thailand travel agent"
      },
      {
        "id": "6927",
        "name": "Online Phuket Tours"
      },
      {
        "id": "6928",
        "name": "Phuket Day Tours"
      },
      {
        "id": "6929",
        "name": "MICE Phuket"
      },
      {
        "id": "6930",
        "name": "Phuket Honeymoon Tour Package"
      },
      {
        "id": "6931",
        "name": "Phuket Snorkeling Tours"
      },
      {
        "id": "6932",
        "name": "Phuket island Tours"
      },
      {
        "id": "6933",
        "name": "Phuket Package Tours"
      },
      {
        "id": "6934",
        "name": "Phi Phi island Tour from Phuket"
      },
      {
        "id": "6935",
        "name": "Phuket Phi Phi Island Tour"
      },
      {
        "id": "6936",
        "name": "Phuket Vacation Packages"
      },
      {
        "id": "6937",
        "name": "Phuket Fishing Tours"
      },
      {
        "id": "6938",
        "name": "Longtail Boat Tours Phuket"
      },
      {
        "id": "6939",
        "name": "Private Longtail boat tours"
      },
      {
        "id": "6940",
        "name": "Catamaran tours Phuket"
      },
      {
        "id": "6941",
        "name": "Private Speed boat tours"
      },
      {
        "id": "6942",
        "name": "Similan Islands"
      },
      {
        "id": "6943",
        "name": "Surin Island"
      },
      {
        "id": "6944",
        "name": "Zipline Tours"
      },
      {
        "id": "6945",
        "name": "Bamboo rafting"
      },
      {
        "id": "6946",
        "name": "White water rafting"
      },
      {
        "id": "6947",
        "name": "Water parks"
      },
      {
        "id": "6948",
        "name": "ATV Tours"
      },
      {
        "id": "6949",
        "name": "Dinner and Show"
      },
      {
        "id": "6950",
        "name": "Group Bookings"
      },
      {
        "id": "6952",
        "name": "ตลาดดอนหวาย"
      },
      {
        "id": "6954",
        "name": "ลานแสดงช้างและฟาร์มจระเข้สามพราน"
      },
      {
        "id": "6955",
        "name": "วัดไร่ขิง"
      },
      {
        "id": "6957",
        "name": "พิพิธภัณฑสถานแห่งชาติพระปฐมเจดีย์"
      },
      {
        "id": "6959",
        "name": "วัดพระปฐมเจดีย์ราชวรมหาวิหาร"
      },
      {
        "id": "6960",
        "name": "เกาะกระดาน"
      },
      {
        "id": "6962",
        "name": "เกาะลิบง"
      },
      {
        "id": "6964",
        "name": "อุทยานแห่งชาติหาดเจ้าไหม"
      },
      {
        "id": "6966",
        "name": "มานะออคิดส์"
      },
      {
        "id": "6977",
        "name": "B2B transportation"
      },
      {
        "id": "6978",
        "name": "airport transfer Phuket"
      },
      {
        "id": "6979",
        "name": "private transfer Phuket"
      },
      {
        "id": "6980",
        "name": "chauffeur service Phuket"
      },
      {
        "id": "6981",
        "name": "van rental Phuket"
      },
      {
        "id": "6982",
        "name": "ground partner Thailand"
      },
      {
        "id": "6983",
        "name": "hotel transfer Phuket"
      },
      {
        "id": "6984",
        "name": "transport for travel agencies"
      },
      {
        "id": "6985",
        "name": "tour operator transport"
      },
      {
        "id": "6986",
        "name": "private car with driver"
      },
      {
        "id": "6988",
        "name": "HappyTrip Travel Agency"
      },
      {
        "id": "6995",
        "name": "The Luxury White"
      },
      {
        "id": "6996",
        "name": "The Luxury White Cruise"
      },
      {
        "id": "6997",
        "name": "Luxury Cruise"
      },
      {
        "id": "6998",
        "name": "Dinner Cruise Bangkok 2025"
      },
      {
        "id": "6999",
        "name": "River Cruise Bangkok"
      },
      {
        "id": "7000",
        "name": "Bangkok Restaurant Cruise"
      },
      {
        "id": "7001",
        "name": "Bangkok Cruise River"
      },
      {
        "id": "7002",
        "name": "Iconsiam Dinner Cruise"
      },
      {
        "id": "7003",
        "name": "Iconsiam"
      },
      {
        "id": "7005",
        "name": "ชุมชนเกาะลัดอีแท่น"
      }
    ],
    "highlights": [
      "Wat Phra Kaew",
      "Wat Ratchanadda",
      "Wat Pho",
      "Golden Mountain",
      "Chatuchak Weekend Market"
    ],
    "a_why": [],
    "a_highlight_district": [],
    "a_nearby_destination": [
      {
        "id": "226",
        "name": "Nonthaburi",
        "description": "\u003Cp\u003ENonthaburi is situated in a fertile basin on the bank of the Chao Phraya River, where many fruit and flower plantations are interspersed with a number of historical temples. The town is only 20 km from Bangkok and is conveniently accessible by road or river.\u003Cbr\u003E\u003Cbr\u003EThe history of Nonthaburi dates back to the Ayutthaya Kingdom as it is strategically located along the Chao Phraya River. The provincial slogan sheds light on the attractions in Nonthaburi, mentioning the Grand Royal Mansion, acclaimed Royal Garden, pottery of Koh Kret, beautiful temples, tasty durians, and the magnificent government hall.\u003C/p\u003E",
        "thumb_image": {
          "id": "9014",
          "title": "43cf27cedf4ec191b4ed326194e253cc.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/destination/4-9014.png",
          "file_type": "image/png",
          "file_size": "457550",
          "file_data": {
            "resolutions": {
              "width": 542,
              "height": 407
            }
          }
        }
      },
      {
        "id": "234",
        "name": "Samut Prakan",
        "description": "\u003Cp\u003ESamut Prakan is not a popular tourist destination in and of itself and therefore there are few guesthouses or hotels; however, because of its proximity to Bangkok, many visitors make day trips from the capital to see the attractions in Samut Prakan, including the Ancient City, the Erawan Museum, and the Crocodile Farm. As Samut Prakan has many expatriate foreigners, English is commonly spoken and there are shops and restaurants that cater to foreign residents and visitors.\u003C/p\u003E\u003Cp\u003ESamut Prakan is located next to Bangkok. The north borders Bangkok and Chachoengsao, the east borders Chachoengsao, the south is the Gulf of Thailand, and the west is Bangkok,\u003C/p\u003E",
        "thumb_image": {
          "id": "9022",
          "title": "4830882e79b02a50f51668b7130059a7.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/destination/4-9022.png",
          "file_type": "image/png",
          "file_size": "368772",
          "file_data": {
            "resolutions": {
              "width": 542,
              "height": 407
            }
          }
        }
      },
      {
        "id": "227",
        "name": "Pathum Thani",
        "description": "\u003Cp\u003EPathum Thani is a province in central Thailand. There are many interesting places suggested. Wat Chedi Thong, for example, is a temple built in Ayuttaya Kingdom with a Mon-style stupa with 4 beautiful gold Buddha images placed on each sides of the stupa. Another interesting temple is Wat Chedi Hoy whose stupa was built from oyster shells. There are many species of birds flying around the temple such as ibis, cormorants, and Javan Pond herons.\u003C/p\u003E\u003Cp\u003EIn Pathum Thani, there are museums to go visiting and learning new things such as National Geological Museum where you can learn about geology affecting your life and development, and National Science Museum where you can get scientific knowledge from the science exhibitions and activities for adapting to your lifestyle and development.\u003C/p\u003E\u003Cp\u003EAfter walking in the museums, you can go to 100-year Rahaeng Market, located on the Rahaeng riverside with old wooden buildings. Sutthaphirompanich Family opens their house to be a museum of antiques. You can have noodles or coconut ice-cream with old-fashioned recipe. There are many shops with retro style inviting you to visit.\u003Cbr\u003E\u003Cbr\u003EAs the area around Pathum Thani is fertile and well irrigated, the people of Pathum Thani grow various fruits, vegetables, flowers, and plants, all of which are for sale at Talad Thai, a gigantic international wholesale and retail produce market. The area around Wat Pailom is also one of the world's largest sanctuaries for Indian open-billed storks, which winter here during their mating season as do Ruby Throats, Blue Throats, Bush Warblers, Crakes, and Rails.\u003C/p\u003E\u003Cp\u003EPathum Thani is a neighboring province of Bangkok. It is situated on the Chao Phraya basin and contains many canals and orange plantations. Its original name is Mueang Sam Khok and was founded during the Ayutthaya Era. The area was originally a settlement for the Mon people who migrated from Mohtama (in Myanmar) over 350 years ago. In the year of 1815 when King Rama II made a royal visit to this area, the inhabitants offered him many lotus flowers, an act that lent itself to the origin of the present name, Pathum Thani or “lotus flower town.”\u003C/p\u003E\u003Cp\u003EBecause of its historical importance, Pathum Thani features a number of important Buddhist temples, and as Pathum Thani is close to Bangkok it is also the location of a number of entertainment venues, including museums and an amusement park.\u003C/p\u003E",
        "thumb_image": {
          "id": "9015",
          "title": "d79034db3241fe6983c7be5121e012b5.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/destination/4-9015.png",
          "file_type": "image/png",
          "file_size": "257449",
          "file_data": {
            "resolutions": {
              "width": 542,
              "height": 407
            }
          }
        }
      },
      {
        "id": "235",
        "name": "Samut Sakhon",
        "description": "\u003Cp\u003ESamut Sakhon is one of well-known coastal provinces along the line of Thailand bay. The main industries of this province are fishery and large scale production of sea salt.\u003C/p\u003E\u003Cp\u003EThere is a historical record of Ayutthaya era that relates to Samut Sakhon. This record contains a story about an honorable figure named Pan Thai Norasing. It is a tale about his loyalty when he served under his lord.&nbsp;\u003C/p\u003E\u003Cp\u003EAccording to Samut Sakhon Attraction Information Center, there are some tourist attractions that are worth for a visit. Some examples are Wat Chong Lom which features estuary views, while the back side boasts a Tha Chin river view, Wat Luk Si Raja Samosorn is the main city’s temple that contains Samut Sakhon’s Buddha statue, Wat Pa Chai Ransi; has an architectural style that is similar to rock palaces of those located in north-eastern cities in the ancient time, Pan Thai Norasing Historical Park; where Pan Thai Norasing shrine was built and has nature trails for us to study about mangrove forest.\u003C/p\u003E\u003Cp\u003EWat Grok Grak is a temple in Meuang Samut Sakhon District. The attraction of this temple is a Buddha statue wearing sunglasses. A tale about this statue is that, long time ago, there was an outbreak of conjunctivitis, so villagers came to pray to the statue and they placed gold sheets on the eyes of the statue as a gift. As a result, the abbot of the temple has to wear the statue with the sunglasses to prevent villagers from placing gold sheets at the eyes.\u003C/p\u003E\u003Cp\u003EThe Dolphin viewpoint is located at the Machanu Shrine on the Mahachai estuary.\u003C/p\u003E\u003Cp\u003EDon Kai Dee village or Benjarong village is a village of craftsmen who have demonstrated skills to make Thai porcelains from generations to generation. The Thai porcelains from this village are high quality guaranteed by the 5 stars of One Tambon One Product (OTOP) standards.\u003C/p\u003E\u003Cp\u003EWat Nang Sao is a temple that has some wield looking sanctuary called Ma Ha Ud sanctuary. This sanctuary has its base look like a ship bilge. Also, it has no window and has only one entrance.\u003C/p\u003E\u003Cp\u003EPan Thai Norasing Waterpark is located in Meuang Samut Sakhon District. This place has a lot of playthings and activities to have fun with.\u003C/p\u003E\u003Cp\u003EAccording to Samut Sakhon Travel Guide Samut Sakhon Province has a lot of activities for tourists to participate.\u003C/p\u003E\u003Cp\u003EHistorical trips held by Samut Sakhon Province itself are bus trips for detour around historical and cultural attractions, such as Pan Thai Norasing Shrine, Vi Chean Cho Dok Fort, and Mahachai Market.\u003C/p\u003E\u003Cp\u003EAside from Historical trips, there are also other activities that tourists can participate around Samut Sakhon. For example, boat trips that travel along city’s canals, agricultural tours that take tourist around fruit farms and flower gardens, demonstrating how to make coconut sugar and how to make Thai porcelains.\u003C/p\u003E\u003Cp\u003EFor food and accommodation, there are a lot of fresh seafood offered with cheap prices, yet good qualities. Also, the coastal area has a lot of resorts and hotels with a beautiful sea view. However, if you want some local homestays, you can find them along the canal, far from the city such as Thai Porcelain village homestay group, which is a homestay group found by villagers, providing tourists with both accommodation and activities to learn about Thai porcelains.\u003C/p\u003E",
        "thumb_image": {
          "id": "9023",
          "title": "6f4863b805ae747b1ff856bb9cd6c95d.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/destination/4-9023.png",
          "file_type": "image/png",
          "file_size": "342496",
          "file_data": {
            "resolutions": {
              "width": 542,
              "height": 407
            }
          }
        }
      },
      {
        "id": "225",
        "name": "Nakhon Pathom",
        "description": "\u003Cp\u003ENakhon Pathom features an ancient religious structure called Phra Pathom Chedi, the first religious landmark that signified the introduction of Buddhism into Thailand. Nakhon Pathom is also renowned for its abundant fruit varieties and famous regional cuisine.&nbsp;It is claimed as one of the oldest cities and the centre of civilization in the Dvaravati Kingdom.&nbsp;Wat Phra Pathom Chedi Rachavaramahaviharn is the royal temple in which the biggest and highest stupa of Thailand is located. The stupa is also the symbol of the city.\u003C/p\u003E\u003Cp\u003EVisitors can visit Wat Rai Khing in Amphoe Sampran.&nbsp;The temple houses the Buddha image in the attitude of subduing Mara or ‘Luang Pho Wat Rai Khing.’&nbsp;There is a market every Sunday.&nbsp;With the shady and pleasant area, people can take a walk and feed thousands of fish. In the temple, there is a museum exhibiting antiques found in this local area.\u003C/p\u003E\u003Cp\u003EFor those who love flowers, you can go to Sampran Riverside which is the garden in Amphoe Sampran near the Nakorn Chaisri River. There are many species of flowers and performances from local people.\u003C/p\u003E\u003Cp\u003EOn 1-7 September of every year, you will be invited to join Nakhon Pathom Food and Fruits Festival at Phra Pathom Chedi’s area. There are local and agricultural products to purchase, such as pomelos, coconuts, guavas, bananas, sweet sausages, crispy pork, and pork floss.\u003Cbr\u003E\u003Cbr\u003EMost of Nakhon Pathom consists of plains with no mountainous lands, though a plateau rises up in the west. The plains along the Tha Cheen River (Nakhon Chaisi River) are the location of Amphoe Nakhon Chaisi, Amphoe Sam Phran, and Amphoe Bang Len. These fertile lands provide agricultural opportunities for the people, thus most of the residents earn their living from agriculture, plantations and farms growing food crops as well as fruit orchards. In fact, Nakhon Pathom is well known for pomelos, a fruit much like a grapefruit, and some Thais call Nakhon Pathom the sweet pomelo town.\u003C/p\u003E",
        "thumb_image": {
          "id": "7874",
          "title": "9682201077fc35dd5c9c31a3dc543807.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/destination/1-7874.png",
          "file_type": "image/png",
          "file_size": "331902",
          "file_data": {
            "resolutions": {
              "width": 542,
              "height": 407
            }
          }
        }
      },
      {
        "id": "220",
        "name": "Chachoengsao",
        "description": "\u003Cp\u003EChachoengsao is an old town by the Bang Pakong river popularly known as \"Pad Riew\", bordering Bangkok. Travelling to Chachoengsao province does not take long.\u003Cbr\u003E\u003Cbr\u003EWhen talking about Chachoengsao province people tend to think of the province's priceless monk, \"Luang Phor Sothon\", an important Buddha statue of Thailand. In addition, Chachoengsao province is famous for its mangoes. During the mango season, Fruits Festivals are held every year.&nbsp;\u003Cbr\u003E\u003Cbr\u003ECurrently, in Chachoengsao province, there are many great religious buildings built together that attract new tourist over the year.&nbsp;\u003C/p\u003E",
        "thumb_image": {
          "id": "7865",
          "title": "678806b4525ed8c8691cb4ef233a6329.png",
          "description": "",
          "url": "https://api.tourismthailand.org/upload/live/destination/1-7865.png",
          "file_type": "image/png",
          "file_size": "324328",
          "file_data": {
            "resolutions": {
              "width": 542,
              "height": 407
            }
          }
        }
      }
    ],
    "a_howto_get_there": []
  }
}
```

https://api.tourismthailand.org/api/explore/get_detail?Language=en&timestamp=1747931653466&menu=restaurant&slug=tam-dai-tam-di


```json
{
  "response_code": 200,
  "response_msg": "Success",
  "result": {
    "id": "21257",
    "name": "Tam Dai Tam Di",
    "introduction": "",
    "detail": "",
    "latitude": "18.792754",
    "longitude": "98.954099",
    "slug": "tam-dai-tam-di",
    "meta_data_description": null,
    "logo_file_id": null,
    "logo": null,
    "thumbnail_file_id": "13601",
    "thumb_image": {
      "id": "13601",
      "title": "P08000806.jpeg",
      "description": "",
      "url": "https://api.tourismthailand.org/upload/live/business_content_thumbnail/13601/P08000806.jpeg",
      "file_type": "image/jpeg",
      "file_size": "84525",
      "file_data": {
        "resolutions": {
          "width": 200,
          "height": 200
        }
      }
    },
    "banner_images": [
      {
        "title": "Tam Dai Tam Di",
        "description": null,
        "url": "https://api.tourismthailand.org/upload/live/business_content_main_image_mobile/13603/P08000806_1.jpeg",
        "image_mobile_url": "https://api.tourismthailand.org/upload/live/business_content_main_image_mobile/13603/P08000806_1.jpeg",
        "image_desktop_url": "https://api.tourismthailand.org/upload/live/business_content_main_image_desktop/13602/P08000806_1.jpeg"
      }
    ],
    "location": {
      "address": "",
      "destination_id": "101",
      "destination": {
        "name": "Chiang Mai"
      },
      "district_code": "5001",
      "district": {
        "name": "Mueang Chiang Mai"
      },
      "sub_district_code": "6126",
      "sub_district": {
        "name": "Suthep"
      },
      "postcode": "50200"
    },
    "branch": [
      {
        "name": "Tam Dai Tam Di",
        "address": "",
        "how_to_travel": "",
        "destination_id": "101",
        "destination": {
          "name": "Chiang Mai"
        },
        "district_code": "5001",
        "district": {
          "name": "Mueang Chiang Mai"
        },
        "sub_district_code": "",
        "sub_district": {
          "name": ""
        },
        "latitude": "18.7928",
        "longitude": "98.9541",
        "postcode": "50200",
        "contact": {
          "phones": [],
          "mobiles": [],
          "emails": [],
          "fax": [],
          "urls": []
        }
      }
    ],
    "explore_category": [
      {
        "id": "75",
        "name": "Brunch",
        "icon": {
          "id": "77",
          "title": "FineDining.svg",
          "url": "https://api.tourismthailand.org/asset/explore/icon/food/FineDining.svg"
        }
      },
      {
        "id": "89",
        "name": "Supper/Night Dining",
        "icon": {
          "id": "77",
          "title": "FineDining.svg",
          "url": "https://api.tourismthailand.org/asset/explore/icon/food/FineDining.svg"
        }
      },
      {
        "id": "94",
        "name": "Local food",
        "icon": {
          "id": "78",
          "title": "LocalFood.svg",
          "url": "https://api.tourismthailand.org/asset/explore/icon/food/LocalFood.svg"
        }
      }
    ],
    "place_category_id": "8",
    "place_category": {
      "name": "Restaurant"
    },
    "contact": {
      "phones": [],
      "mobiles": [],
      "emails": [],
      "fax": [],
      "urls": []
    },
    "opening_hours": [],
    "facilities": [],
    "services": [],
    "payment_methods": [],
    "tagwords": [],
    "related_articles": [],
    "rating_info": {
      "rating": 0,
      "rating_text": "",
      "all": 0,
      "5": 0,
      "4": 0,
      "3": 0,
      "2": 0,
      "1": 0
    },
    "price_min_range": null,
    "price_max_range": null,
    "price_range_min": 0,
    "price_range_max": 0,
    "sub_category": [
      {
        "id": "54",
        "name": "Brunch"
      },
      {
        "id": "70",
        "name": "Supper/Night Dining"
      }
    ],
    "restaurant_cuisine": [],
    "important_note": null,
    "a_standard": [],
    "a_award": [
      {
        "id": "1",
        "name": "Tourism Standards",
        "year": "",
        "thumb_image": {
          "title": "Tourism Standards",
          "description": "Tourism Standards",
          "url": "https://api.tourismthailand.org/asset/place/award/Tourism.png"
        }
      }
    ],
    "a_howto_get_there": [],
    "a_highlight_content": [],
    "a_gallery": [],
    "tripadvisor_id": null
  }
}
```