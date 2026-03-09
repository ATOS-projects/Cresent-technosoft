# flow_engine.py
# Guided conversation flow for Crescent Technosoft chatbot.
# Works like a WhatsApp bot — no AI API needed.

MAIN_MENU = """👋 Welcome to *Crescent Technosoft*!

We provide software solutions for healthcare & industries since 2005.

Please choose an option:
1️⃣  Hospital Management Software (HMS)
2️⃣  Lab Management Software (LMS)
3️⃣  Clinic Management Software (CMS)
4️⃣  Pharmacy Management Software
5️⃣  ERP / Inventory / Other Software
6️⃣  Request a Demo
7️⃣  Pricing & Plans
8️⃣  Talk to our Team

Reply with a number (1-8) to continue."""

FLOWS = {
    "1": {
        "text": """🏥 *Hospital Management Software (HMS)*

Our HMS covers end-to-end hospital operations:
✅ Patient Registration & OPD Billing
✅ IPD Management & Bed Allocation
✅ Doctor & Staff Scheduling
✅ Medical Records & History
✅ Pharmacy & Lab Integration
✅ Reports & Analytics

Available in both *Online & Offline* modes.

What would you like to do next?
1️⃣  Request a Demo
2️⃣  Know about Pricing
3️⃣  Talk to our Team
0️⃣  Back to Main Menu""",
        "next": {"1": "demo", "2": "pricing", "3": "contact", "0": "main"}
    },
    "2": {
        "text": """🔬 *Lab Management Software (LMS)*

Our LMS empowers diagnostic centres with:
✅ Test Request & Sample Management
✅ Result Entry & Report Generation
✅ Patient History & Billing
✅ Barcode Integration
✅ Online Report Delivery

Available in both *Online & Offline* modes.

What would you like to do next?
1️⃣  Request a Demo
2️⃣  Know about Pricing
3️⃣  Talk to our Team
0️⃣  Back to Main Menu""",
        "next": {"1": "demo", "2": "pricing", "3": "contact", "0": "main"}
    },
    "3": {
        "text": """🩺 *Clinic Management Software (CMS)*

Designed for individual doctors & clinics:
✅ Appointment Scheduling
✅ Patient Records & Prescriptions
✅ OP Billing & Receipts
✅ SMS Reminders
✅ Simple & Easy to Use

What would you like to do next?
1️⃣  Request a Demo
2️⃣  Know about Pricing
3️⃣  Talk to our Team
0️⃣  Back to Main Menu""",
        "next": {"1": "demo", "2": "pricing", "3": "contact", "0": "main"}
    },
    "4": {
        "text": """💊 *Pharmacy Management Software*

Complete pharmacy operations solution:
✅ Medicine Stock & Expiry Tracking
✅ Purchase & Sales Management
✅ Billing & GST Reports
✅ Supplier Management
✅ Integration with HMS & LMS

What would you like to do next?
1️⃣  Request a Demo
2️⃣  Know about Pricing
3️⃣  Talk to our Team
0️⃣  Back to Main Menu""",
        "next": {"1": "demo", "2": "pricing", "3": "contact", "0": "main"}
    },
    "5": {
        "text": """🏭 *ERP / Inventory & Other Software*

We also build customised solutions for:
✅ ERP for Manufacturing & Service Industries
✅ Inventory Management
✅ Payroll & HR Software
✅ School Management Software
✅ Library Management Software
✅ Custom Web Applications

What would you like to do next?
1️⃣  Request a Demo
2️⃣  Know about Pricing
3️⃣  Talk to our Team
0️⃣  Back to Main Menu""",
        "next": {"1": "demo", "2": "pricing", "3": "contact", "0": "main"}
    },
    "6": "demo",
    "7": "pricing",
    "8": "contact",
}

DEMO_RESPONSE = """📅 *Request a Demo*

We'd love to show you the software in action!

Please share your details and our team will schedule a demo at your convenience:

👤 Your Name
📱 Phone Number
🏢 Organisation Name
📍 City

We'll get back to you within *24 hours*! 🙌"""

PRICING_RESPONSE = """💰 *Pricing & Plans*

Our pricing is customised based on:
• Type of software (HMS / LMS / CMS etc.)
• Number of users / terminals
• Online or Offline mode
• Additional modules required

To get an accurate quote, please share your details:

👤 Your Name
📱 Phone Number
🏢 Organisation Name & Type
📍 City

Our team will send you a detailed proposal! 📋"""

CONTACT_RESPONSE = """📞 *Talk to our Team*

Our support team is happy to help you!

Please share your contact details and we'll reach out shortly:

👤 Your Name
📱 Phone Number
🏢 Organisation (if any)
❓ Your Query (briefly)

Or reach us directly:
📧 Email: info@crescenttechnosofts.com
🌐 Website: www.crescenttechnosofts.com
📍 Chennai, Tamil Nadu, India"""

CONTACT_SAVED_RESPONSE = """✅ *Thank you!*

We've received your details. Our team will contact you shortly.

Is there anything else you'd like to know?
0️⃣  Back to Main Menu"""

FALLBACK_RESPONSE = """🤔 I didn't quite get that.

Please reply with a *number* from the menu options.

Type *0* or *menu* anytime to go back to the Main Menu."""


def get_bot_response(user_input: str, session_messages: list) -> tuple[str, str]:
    """
    Returns (bot_reply, next_state).
    next_state is stored in session summary to track where user is in the flow.
    """
    text = user_input.strip().lower()

    # Determine current state from session summary (last known state)
    current_state = "main"
    # We store state as a simple prefix in summary like "state:demo"
    if session_messages:
        for msg in reversed(session_messages):
            if msg.role == "assistant" and msg.content.startswith("__state__:"):
                current_state = msg.content.replace("__state__:", "").strip()
                break

    # Always allow going back to main menu
    if text in ("0", "menu", "hi", "hello", "start", "help"):
        return MAIN_MENU, "main"

    # Handle contact details capture state
    if current_state in ("demo", "pricing", "contact"):
        # Any freeform text here = they've shared their details
        if len(text) > 10:
            return CONTACT_SAVED_RESPONSE, "main"
        else:
            return FALLBACK_RESPONSE, current_state

    # Main menu navigation
    if current_state == "main":
        if text in FLOWS:
            destination = FLOWS[text]

            if destination == "demo":
                return DEMO_RESPONSE, "demo"
            elif destination == "pricing":
                return PRICING_RESPONSE, "pricing"
            elif destination == "contact":
                return CONTACT_RESPONSE, "contact"
            else:
                # It's a sub-menu dict
                return destination["text"], text

        return FALLBACK_RESPONSE, "main"

    # Sub-menu navigation (e.g. user picked a product and now choosing 1/2/3)
    if current_state in FLOWS and isinstance(FLOWS[current_state], dict):
        next_map = FLOWS[current_state]["next"]
        if text in next_map:
            destination = next_map[text]
            if destination == "demo":
                return DEMO_RESPONSE, "demo"
            elif destination == "pricing":
                return PRICING_RESPONSE, "pricing"
            elif destination == "contact":
                return CONTACT_RESPONSE, "contact"
            elif destination == "main":
                return MAIN_MENU, "main"

    return FALLBACK_RESPONSE, current_state
