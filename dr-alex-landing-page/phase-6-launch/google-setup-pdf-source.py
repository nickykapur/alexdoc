from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table,
                                TableStyle, HRFlowable, KeepTogether)

TEAL = colors.HexColor("#0e6153")
DARK = colors.HexColor("#062f29")
GOLD = colors.HexColor("#7d5a10")
GREY = colors.HexColor("#3f4b47")
CREAM = colors.HexColor("#f8f4ed")
BORDER = colors.HexColor("#dfe5e2")

def S(name, **kw):
    base = dict(fontName="Helvetica", fontSize=10.5, leading=15,
                textColor=GREY, alignment=TA_LEFT, spaceAfter=6)
    base.update(kw)
    return ParagraphStyle(name, **base)

title   = S("t", fontName="Times-Bold", fontSize=21, leading=25, textColor=DARK, spaceAfter=3)
sub     = S("s", fontSize=10.5, textColor=TEAL, spaceAfter=14)
h2      = S("h2", fontName="Times-Bold", fontSize=14.5, leading=18, textColor=DARK,
            spaceBefore=15, spaceAfter=7)
body    = S("b")
step    = S("st", leftIndent=17, spaceAfter=7)
note    = S("n", fontSize=9.5, leading=13.5, textColor=GOLD)
small   = S("sm", fontSize=9, leading=12.5, textColor=GREY)
white   = S("w", fontSize=10.5, textColor=colors.white, spaceAfter=3)
whiteb  = S("wb", fontName="Helvetica-Bold", fontSize=10.5, textColor=colors.white, spaceAfter=3)

def band(flows, bg=CREAM, border=BORDER):
    t = Table([[flows]], colWidths=[165*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), bg),
        ("BOX", (0,0), (-1,-1), 0.8, border),
        ("LEFTPADDING", (0,0), (-1,-1), 11), ("RIGHTPADDING", (0,0), (-1,-1), 11),
        ("TOPPADDING", (0,0), (-1,-1), 9), ("BOTTOMPADDING", (0,0), (-1,-1), 9),
    ]))
    return t

def rule():
    return HRFlowable(width="100%", thickness=1.6, color=GOLD,
                      spaceBefore=1, spaceAfter=9, lineCap="square", hAlign="LEFT")

doc = SimpleDocTemplate(
    "/tmp/claude-0/-home-user-alexdoc/89250765-729f-52c7-8436-89fda89f1689/scratchpad/"
    "Google-Business-Profile-Setup-Dr-Mudrakouski.pdf",
    pagesize=A4, leftMargin=22*mm, rightMargin=23*mm, topMargin=20*mm, bottomMargin=18*mm,
    title="Google Business Profile Setup — Dr Aliaksandr Mudrakouski",
    author="alexpainclinic.ie")

st = []
st.append(Paragraph("Setting Up Your Google Listing", title))
st.append(Paragraph("Dr Aliaksandr Mudrakouski &nbsp;·&nbsp; alexpainclinic.ie", sub))
st.append(rule())

st.append(Paragraph(
    "This creates the listing that appears on Google Maps and in the box of results at the top of "
    "a Google search. For searches like <i>“pain clinic Dublin”</i>, most patients click there "
    "rather than on the website links below it — so this is the single most valuable step in "
    "getting the practice found online.", body))
st.append(Paragraph(
    "It takes about 15 minutes. It must be done from your own Google account, because Google "
    "verifies that you are genuinely at the address, so unfortunately it cannot be done on your "
    "behalf.", body))

st.append(Paragraph("Before you start", h2))
st.append(band([
    Paragraph("<b>Have these to hand:</b>", body),
    Paragraph("• A Google account (a Gmail address). If you would prefer a separate one for the "
              "practice, create it first at <b>accounts.google.com</b>.", small),
    Paragraph("• Your mobile phone, for the verification step.", small),
]))

st.append(Paragraph("Step 1 — Check whether a listing already exists", h2))
st.append(Paragraph(
    "Google may have already created an entry for you from your hospital and insurer profiles. "
    "Claiming an existing one is much better than creating a second.", body))
st.append(Paragraph("1. Open <b>google.com/maps</b>", step))
st.append(Paragraph("2. Search for <b>Aliaksandr Mudrakouski</b>", step))
st.append(Paragraph("3. If an entry for you appears, click it, then click "
                    "<b>“Claim this business”</b> and continue to Step 3.", step))
st.append(Paragraph("4. If nothing appears, continue to Step 2.", step))

st.append(Paragraph("Step 2 — Create the listing", h2))
st.append(Paragraph("1. Go to <b>google.com/business</b> and sign in.", step))
st.append(Paragraph("2. Click <b>Add your business to Google</b>.", step))
st.append(Paragraph("3. Enter the details exactly as printed below — they must match the website "
                    "word for word, or it counts against us on Google.", step))

data = [
    ["Business name", "Dr Aliaksandr Mudrakouski — Pain Management"],
    ["Business category", "Pain Management Physician"],
    ["Address", "Suite 5, Beaumont Private Clinic\nHospital Road, Beaumont\nDublin 9, D09 Y177"],
    ["Phone", "085 713 3548"],
    ["Website", "https://alexpainclinic.ie"],
    ["Opening hours", "Monday to Friday, 8:00 – 19:00\n(add Saturday if you wish to show it)"],
]
tbl = Table([[Paragraph(f"<b>{a}</b>", small), Paragraph(b.replace("\n","<br/>"), small)]
             for a, b in data], colWidths=[38*mm, 127*mm])
tbl.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("BACKGROUND", (0,0), (0,-1), CREAM),
    ("GRID", (0,0), (-1,-1), 0.7, BORDER),
    ("LEFTPADDING", (0,0), (-1,-1), 8), ("RIGHTPADDING", (0,0), (-1,-1), 8),
    ("TOPPADDING", (0,0), (-1,-1), 7), ("BOTTOMPADDING", (0,0), (-1,-1), 7),
]))
st.append(Spacer(1, 3)); st.append(tbl); st.append(Spacer(1, 9))
st.append(Paragraph("When asked “Do you want to add a location customers can visit?” — answer "
                    "<b>Yes</b>, and enter the address above.", body))

st.append(Paragraph("Step 3 — Verification", h2))
st.append(Paragraph(
    "Google now confirms you are really at that address. It chooses one of the following — you do "
    "not get to pick.", body))
st.append(Paragraph("<b>By postcard.</b> A card with a code arrives at the clinic in about 1–2 "
                    "weeks. Enter the code when it comes.", step))
st.append(Paragraph("<b>By video.</b> You record a short continuous video on your phone: the "
                    "building sign showing the address, then walking to your suite door showing "
                    "the number, then inside the room. Nothing needs to be said.", step))
st.append(Spacer(1, 5))
st.append(band([
    Paragraph("<b>Please note</b>", note),
    Paragraph("Do not change the address after requesting a postcard — it cancels the code. "
              "Nothing appears publicly on Google until verification finishes, so it is worth "
              "starting this sooner rather than later.", note),
]))

st.append(Paragraph("Step 4 — Give us access", h2))
st.append(Paragraph(
    "This lets us keep the listing updated for you. You remain the owner throughout and can "
    "remove access at any time.", body))
st.append(Paragraph("1. Open your listing at <b>business.google.com</b>", step))
st.append(Paragraph("2. Click <b>Settings</b>, then <b>People and access</b>", step))
st.append(Paragraph("3. Click <b>Add</b>, and enter: "
                    "<b><font color='#0e6153'>[YOUR EMAIL ADDRESS HERE]</font></b>", step))
st.append(Paragraph("4. Choose the role <b>Manager</b> — not Owner", step))
st.append(Paragraph("5. Click <b>Invite</b>", step))

st.append(Paragraph("Once finished", h2))
st.append(Paragraph(
    "Please send us the link to your listing, and we will connect it to the website so that "
    "Google recognises the two as the same practice.", body))
st.append(Spacer(1, 10))

st.append(band([
    Paragraph("Any difficulty at any step, send a screenshot and we will talk you through it.", whiteb),
    Paragraph("Nishant &nbsp;·&nbsp; alexpainclinic.ie", white),
], bg=TEAL, border=TEAL))

doc.build(st)
print("PDF written")
