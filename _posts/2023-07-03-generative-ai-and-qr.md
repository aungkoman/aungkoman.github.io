---
layout: post
title:  "Create attrative qr with AI"
date:   2023-07-03 13:30:00 +0630
categories: howto
---



https://keremerkan.net/qr-code-and-2d-code-generator/


Here is a nice tutorial on how you can create these AI Generated QR Codes with Stable Diffusion & ControlNet👉 https://learn.thinkdiffusion.com/creating-qr-codes-with-controlnet/



Say goodbye to boring QR codes - these AI-generated QR codes are mind-blowing 🤯

Witness the fusion of elegance and functionality as Stable Diffusion + ControlNet transforms QR codes into these captivating images, without compromising their reliability. (give these QR codes a scan! 👇🏼)

By merging art and technology, we're revolutionizing advertising and redefining the boundaries of creativity.

Get ready for a whole new era in marketing.

found these on reddit: https://lnkd.in/eT-qAdhd
~ ~ ~ ~ ~
Complete step-by-step roadmap to Learn AI/ML from scratch👉 https://zealoq.me/24952cca
•


https://www.datacamp.com/tutorial/how-to-run-stable-diffusion



---

Table of contents
Workflow 1: Best for full pose characters (Img2Img)
Step 1. Create Normal QR Code
Step 2: Create Art for Combining with the QR Code
Step 3: Combine the Image with the QR Code
Step 4: High five!
Workflow 2: A wider array of possibilities (Txt2Img)
Step 1: Create our prompts
Step 2: ControlNet Unit 0
Step 3: ControlNet Unit 1
Step 4: High Five!
Other examples using the same txt2Img workflow
QR codes seem to be the latest trend on stable diffusion, so let's dive in and see how we can create our own!

Here's a decent video tutorial if you prefer it over the detailed written tutorial below.


Making QR codes with Stable Diffusion
A super detailed tutorial with new insights from Sebastian Kampth on AI QR Codes using Stable Diffusion:


Ultimate QR Guide. What All Other Guides Miss. - Sebastian Kamph
Workflow 1: Best for full pose characters (Img2Img)

Make your own AI QR Code by combining the QR code and art together with Stable Diffusion's ControlNet on ThinkDiffusion
Step 1. Create Normal QR Code
Firstly, we need to create a QR code. You can create one here for free at https://keremerkan.net/qr-code-and-2d-code-generator/

Enter your url and it helps to use URL shortening. Set the error correction level to high as we are going to be blending the image with our own image.
We can then generate a QR code and save it to your local pc.

Step 2: Create Art for Combining with the QR Code
We can now either find an image we like or generate some from the txt2Img tab within Stable Diffusion. I am going to generate one within the txt2Img tab.

If you don't have Stable Diffusion installed locally, you can head over to ThinkDiffusion to follow along. Simply select A1111 and launch a machine to get started.

(The screenshots below are from Automatic1111 or A1111 for short, it's the de facto UI for Stable Diffusion)

Alrighty, let's do it!


(1) The model is revAnimated_v122
(2) Sampling method is DPM++ 2S a Karras
(3) Sampling steps is 20
(4) Resolution 768 x 768
(5) CFG scale 11

For the positive prompts, because we are using ControlNet_OpenPose_Full, it is best to include 'full body' in the positive prompts as we are mimicking the stance of our image. You can even change the resolution to width 512 and height 768 to make it a portrait, so that it interferes less with our QR code
Positive Prompts:
futobot, cyborg, ((masterpiece),(best quality),(ultra-detailed), (full body:1.2), 1 female, solo, hood up, upper body, mask, 1 girl, female focus, black gloves, cloak, long sleeves

Negative Prompts:
paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, glans, nsfw, nipples, (((necklace))), (worst quality, low quality:1.2), watermark, username, signature, text, multiple breasts, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet, single color, ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), (((tranny))), (((trans))), (((trannsexual))), (hermaphrodite), extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), (((disfigured))), (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), (missing legs), (((extra arms))), (((extra legs))), mutated hands,(fused fingers), (too many fingers), (((long neck))), (bad body perspect:1.1)


AI generated image using Stable Diffusion on ThinkDiffusion.com
Step 3: Combine the Image with the QR Code
We can then send this to the img2img tab, or upload your image to the img2img tab if you already have one you want to use. We can enter the same positive and negative prompts.
IMPORTANT: You have to enter prompts within the img2img tab for this to work

(1) We can then select the sampling method as DPM++ 2S a Karras,
(2) Sampling steps 60
(3) A resolution of 768 x 768
(4) A CFG Scale of 11
(5) And a Denoising strength as 1.0

We then need to go into ControlNet for it to do its magic! For ControlNet Unit 0, we need to upload the image again that was generated in the txt2img tab or your own image if you already have one.

(1) Make sure to tick the checkbox to Enable ControlNet within ControlNet Unit 0
(2) Select OpenPose as the Control Type, openpose_full as the pre-processor and control_sd15_openpose as the ControlNet model
(3) We can leave the Control Weight at 1 as we are going to inform controlnet that our QR code should be weighted heavier
(4) We can leave the the Starting Control Step at 0 and the Ending Control Step at 1 as we want our image to be generated from the initial start.
(5) Select Balanced as the Control Mode  
(6) And Resize and Fill for the Resize Mode.

We now need to go into the controlNet unit 1 tab (If you don't see this then you need to go into settings > controlNet and change the slider to show more than 1 controlNet tab

We can then upload our QR code to the controlNet Unit1 tab

(1) Ensure we click enable to make sure ControlNet is activated
(2) Select tile as the Control Type,
(3) tile_resample as the pre-processor  
(4) control_v11f1e_sd15_tile as the controlNet model (You may have a different version of the controlNet tile model)
(5) Set the control weight to 1.2 to inform control net that our QR code is slightly more important than our image!
(6) Set the starting control step to 0.23 and the ending control step to 1. This ensures that our image will start rendering before the QR code is rendered. It's more aesthetically pleasing on the eye this way!  
(7) Set the control mode to balanced
(8) and the resize mode to Resize and fill

Step 4: High five!
Congrats, we can now click generate and we should have our QR code blended with our image!


QR Code created with AI using Stable Diffusion with ControlNet on ThinkDiffusion.com
Workflow 2: A wider array of possibilities (Txt2Img)

QR Code created with AI using Stable Diffusion with ControlNet on ThinkDiffusion.com
Step 1: Create our prompts
We can start with entering our positive and negative prompts
Positive Prompts: Lady gaga in the style of Alberto Seveso, 8k, ultra detailed, (masterpiece:1.5)
Negative Prompts: blurry, lowres, text, nsfw
(1) Set the stable diffusion checkpoint to revAnimated
(2) the sampling method as DPM++ 2M Karras
(3) sampling steps to 30
(4) enable restore faces ✅
(5) set the resolution to 768 x 768
(6) and a CFG scale of 11

Step 2: ControlNet Unit 0
(1) Click the ControlNet dropdown
(2) and upload our qr code.
(3) Click Enable to ensure that ControlNet is activated ✅
(4) Set the Control Type to be All
(5) the Preprocessor to be inpaint_global_harmonious
(6) and the ControlNet model to be control_v1p_sd15_brightness
(7) Set the Control weight to be 0.35

Step 3: ControlNet Unit 1
(1) Click over to the ControlNet Unit 1 Tab
(2) Within ControlNet Unit 1 we want to upload our qr code again
(3) Click Enable to ensure that ControlNet is activated ✅
(4) Set the Control Type to All
(5) the Preprocessor to inpaint_global_harmonious
(6) and the ControlNet model to control_v11f1e_sd15_tile
(7) Set the Control Weight to 0.5
(8) the starting Control Step to 0.35
(9) and the ending control step to 0.70

Step 4: High Five!
Click generate...!

QR Code created with AI using Stable Diffusion with ControlNet on ThinkDiffusion.com
Other examples using the same txt2Img workflow
Lion

Positive Prompts: Full Photo shot of a lion, Yoji Shinkawa style, Jean-baptiste Monge, general plan, central composition, entirely on a sheet, Ink painting, expressive painting, watercolor, bold brushstrokes, Concept art, orange, (purple:1.2), gray and white, stylize, intricate detail, 8k, transparent background, (white background:1.4), 3D vector

Negative Prompts: Watermark, Text, censored, deformed, bad anatomy, disfigured


QR Code created with AI using Stable Diffusion with ControlNet on ThinkDiffusion.com
City

Positive Prompts: 8k, RAW photo, best quality, (masterpiece:1.2), (realistic, photo-realistic:1.37), octane render, ultra high res, ultra-detailed , professional lighting, photon mapping, radiosity, physically-based rendering, ue5, ((island sanctuary)), ((ancient fallen kingdom)), ((drowned city))

Negative Prompts: cartoon, painting, illustration, (worst quality, low quality, normal quality:2), nsfw


QR Code created with AI using Stable Diffusion with ControlNet on ThinkDiffusion.com
Please note that you can play around with the control weight of both images to find a happy place! Also, you can tweak the starting control step of the QR image. I find these settings tend to give a decent look but also works as a QR code. They don't always scan though, just keep generating and tweaking to get the exact outcome you desire!

If you’re having issues with installation or slow hardware, you can try any of these workflows on a more powerful GPU in your browser with ThinkDiffusion.

TRY THINKDIFFUSION
If you’d like to have more control over your character art in Step 2, check out my post to using OpenPose here. Happy creating!


Keep up the good SD work, let's go!
Share:
MEMBER DISCUSSION
5 comments
