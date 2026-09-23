import {
  Bike,
  BriefcaseBusiness,
  Camera,
  Car,
  ChefHat,
  CircleHelp,
  Code,
  DollarSign,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Home,
  Laptop,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  Music,
  Phone,
  Plane,
  BookOpen,
  PenLine,
  ShoppingCart,
  ShowerHead,
  Smartphone,
  Sparkles,
  Stethoscope,
  Train,
  Utensils,
  Users,
  Waves,
  Footprints,
  type LucideIcon,
} from "lucide-react";

export interface Activity {
  id: string;
  icon: LucideIcon;
}

export const keywordToActivity = new Map<string, Activity>([
  // ─────────────────────────────────────────────
  // CYCLING
  // ─────────────────────────────────────────────
  ["bike", { id: "cycling", icon: Bike }],
  ["bicycle", { id: "cycling", icon: Bike }],
  ["cycling", { id: "cycling", icon: Bike }],
  ["cycle", { id: "cycling", icon: Bike }],
  ["ride a bike", { id: "cycling", icon: Bike }],
  ["rad", { id: "cycling", icon: Bike }],
  ["fahrrad", { id: "cycling", icon: Bike }],
  ["radfahren", { id: "cycling", icon: Bike }],
  ["radfahren gehen", { id: "cycling", icon: Bike }],
  ["radeln", { id: "cycling", icon: Bike }],
  ["دراجة", { id: "cycling", icon: Bike }],
  ["دراجة هوائية", { id: "cycling", icon: Bike }],
  ["ركوب الدراجة", { id: "cycling", icon: Bike }],
  ["ركوب دراجة", { id: "cycling", icon: Bike }],

  // ─────────────────────────────────────────────
  // RUNNING
  // ─────────────────────────────────────────────
  ["run", { id: "running", icon: Footprints }],
  ["running", { id: "running", icon: Footprints }],
  ["jog", { id: "running", icon: Footprints }],
  ["jogging", { id: "running", icon: Footprints }],
  ["laufen", { id: "running", icon: Footprints }],
  ["joggen", { id: "running", icon: Footprints }],
  ["rennen", { id: "running", icon: Footprints }],
  ["الجري", { id: "running", icon: Footprints }],
  ["جري", { id: "running", icon: Footprints }],
  ["ركض", { id: "running", icon: Footprints }],

  // ─────────────────────────────────────────────
  // WALKING
  // ─────────────────────────────────────────────
  ["walk", { id: "walking", icon: Footprints }],
  ["walking", { id: "walking", icon: Footprints }],
  ["stroll", { id: "walking", icon: Footprints }],
  ["spaziergang", { id: "walking", icon: Footprints }],
  ["spazieren", { id: "walking", icon: Footprints }],
  ["spazieren gehen", { id: "walking", icon: Footprints }],
  ["gehen", { id: "walking", icon: Footprints }],
  ["المشي", { id: "walking", icon: Footprints }],
  ["مشي", { id: "walking", icon: Footprints }],
  ["المشي لمسافات طويلة", { id: "walking", icon: Footprints }],

  // ─────────────────────────────────────────────
  // GYM / WORKOUT
  // ─────────────────────────────────────────────
  ["gym", { id: "gym", icon: Dumbbell }],
  ["workout", { id: "gym", icon: Dumbbell }],
  ["work out", { id: "gym", icon: Dumbbell }],
  ["exercise", { id: "gym", icon: Dumbbell }],
  ["fitness", { id: "gym", icon: Dumbbell }],
  ["training", { id: "gym", icon: Dumbbell }],
  ["fitnessstudio", { id: "gym", icon: Dumbbell }],
  ["fitnessstudio gehen", { id: "gym", icon: Dumbbell }],
  ["sport", { id: "gym", icon: Dumbbell }],
  ["trainieren", { id: "gym", icon: Dumbbell }],
  ["training machen", { id: "gym", icon: Dumbbell }],
  ["تمرين", { id: "gym", icon: Dumbbell }],
  ["تمارين", { id: "gym", icon: Dumbbell }],
  ["رياضة", { id: "gym", icon: Dumbbell }],
  ["الجيم", { id: "gym", icon: Dumbbell }],
  ["النادي الرياضي", { id: "gym", icon: Dumbbell }],

  // ─────────────────────────────────────────────
  // SWIMMING
  // ─────────────────────────────────────────────
  ["swim", { id: "swimming", icon: Waves }],
  ["swimming", { id: "swimming", icon: Waves }],
  ["pool", { id: "swimming", icon: Waves }],
  ["swimming pool", { id: "swimming", icon: Waves }],
  ["schwimmen", { id: "swimming", icon: Waves }],
  ["schwimmbad", { id: "swimming", icon: Waves }],
  ["im schwimmbad", { id: "swimming", icon: Waves }],
  ["سباحة", { id: "swimming", icon: Waves }],
  ["السباحة", { id: "swimming", icon: Waves }],
  ["مسبح", { id: "swimming", icon: Waves }],

  // ─────────────────────────────────────────────
  // STUDYING
  // ─────────────────────────────────────────────
  ["study", { id: "studying", icon: GraduationCap }],
  ["studying", { id: "studying", icon: GraduationCap }],
  ["learn", { id: "studying", icon: GraduationCap }],
  ["learning", { id: "studying", icon: GraduationCap }],
  ["studying for exam", { id: "studying", icon: GraduationCap }],
  ["lernen", { id: "studying", icon: GraduationCap }],
  ["lernen gehen", { id: "studying", icon: GraduationCap }],
  ["lernen für die klausur", { id: "studying", icon: GraduationCap }],
  ["studieren", { id: "studying", icon: GraduationCap }],
  ["für die klausur lernen", { id: "studying", icon: GraduationCap }],
  ["الدراسة", { id: "studying", icon: GraduationCap }],
  ["دراسة", { id: "studying", icon: GraduationCap }],
  ["أدرس", { id: "studying", icon: GraduationCap }],
  ["مذاكرة", { id: "studying", icon: GraduationCap }],

  // ─────────────────────────────────────────────
  // READING
  // ─────────────────────────────────────────────
  ["read", { id: "reading", icon: BookOpen }],
  ["reading", { id: "reading", icon: BookOpen }],
  ["book", { id: "reading", icon: BookOpen }],
  ["read a book", { id: "reading", icon: BookOpen }],
  ["lesen", { id: "reading", icon: BookOpen }],
  ["buch lesen", { id: "reading", icon: BookOpen }],
  ["lektüre", { id: "reading", icon: BookOpen }],
  ["قراءة", { id: "reading", icon: BookOpen }],
  ["اقرأ", { id: "reading", icon: BookOpen }],
  ["قراءة كتاب", { id: "reading", icon: BookOpen }],

  // ─────────────────────────────────────────────
  // CODING
  // ─────────────────────────────────────────────
  ["code", { id: "coding", icon: Code }],
  ["coding", { id: "coding", icon: Code }],
  ["programming", { id: "coding", icon: Code }],
  ["program", { id: "coding", icon: Code }],
  ["develop", { id: "coding", icon: Code }],
  ["development", { id: "coding", icon: Code }],
  ["programmieren", { id: "coding", icon: Code }],
  ["programmierung", { id: "coding", icon: Code }],
  ["entwickeln", { id: "coding", icon: Code }],
  ["entwicklung", { id: "coding", icon: Code }],
  ["programmieren lernen", { id: "coding", icon: Code }],
  ["برمجة", { id: "coding", icon: Code }],
  ["برمج", { id: "coding", icon: Code }],
  ["تطوير", { id: "coding", icon: Code }],
  ["تطوير البرمجيات", { id: "coding", icon: Code }],

  // ─────────────────────────────────────────────
  // WORK
  // ─────────────────────────────────────────────
  ["work", { id: "work", icon: BriefcaseBusiness }],
  ["working", { id: "work", icon: BriefcaseBusiness }],
  ["job", { id: "work", icon: BriefcaseBusiness }],
  ["office", { id: "work", icon: BriefcaseBusiness }],
  ["work meeting", { id: "work", icon: BriefcaseBusiness }],
  ["arbeiten", { id: "work", icon: BriefcaseBusiness }],
  ["arbeit", { id: "work", icon: BriefcaseBusiness }],
  ["jobben", { id: "work", icon: BriefcaseBusiness }],
  ["büro", { id: "work", icon: BriefcaseBusiness }],
  ["arbeiten gehen", { id: "work", icon: BriefcaseBusiness }],
  ["عمل", { id: "work", icon: BriefcaseBusiness }],
  ["العمل", { id: "work", icon: BriefcaseBusiness }],
  ["وظيفة", { id: "work", icon: BriefcaseBusiness }],

  // ─────────────────────────────────────────────
  // MEETING
  // ─────────────────────────────────────────────
  ["meeting", { id: "meeting", icon: Users }],
  ["meet", { id: "meeting", icon: Users }],
  ["appointment", { id: "meeting", icon: Users }],
  ["termin", { id: "meeting", icon: Users }],
  ["besprechung", { id: "meeting", icon: Users }],
  ["treffen", { id: "meeting", icon: Users }],
  ["meeting haben", { id: "meeting", icon: Users }],
  ["اجتماع", { id: "meeting", icon: Users }],
  ["موعد", { id: "meeting", icon: Users }],
  ["لقاء", { id: "meeting", icon: Users }],

  // ─────────────────────────────────────────────
  // SOCIAL
  // ─────────────────────────────────────────────
  ["friends", { id: "socializing", icon: Users }],
  ["friend", { id: "socializing", icon: Users }],
  ["hangout", { id: "socializing", icon: Users }],
  ["hang out", { id: "socializing", icon: Users }],
  ["socialize", { id: "socializing", icon: Users }],
  ["socializing", { id: "socializing", icon: Users }],
  ["freunde treffen", { id: "socializing", icon: Users }],
  ["freunde", { id: "socializing", icon: Users }],
  ["freunde treffen gehen", { id: "socializing", icon: Users }],
  ["أصدقاء", { id: "socializing", icon: Users }],
  ["أصدقاءي", { id: "socializing", icon: Users }],
  ["الخروج مع الأصدقاء", { id: "socializing", icon: Users }],

  // ─────────────────────────────────────────────
  // SHOPPING
  // ─────────────────────────────────────────────
  ["shop", { id: "shopping", icon: ShoppingCart }],
  ["shopping", { id: "shopping", icon: ShoppingCart }],
  ["buy", { id: "shopping", icon: ShoppingCart }],
  ["buy groceries", { id: "shopping", icon: ShoppingCart }],
  ["groceries", { id: "shopping", icon: ShoppingCart }],
  ["einkaufen", { id: "shopping", icon: ShoppingCart }],
  ["einkauf", { id: "shopping", icon: ShoppingCart }],
  ["lebensmittel kaufen", { id: "shopping", icon: ShoppingCart }],
  ["متجر", { id: "shopping", icon: ShoppingCart }],
  ["تسوق", { id: "shopping", icon: ShoppingCart }],
  ["شراء", { id: "shopping", icon: ShoppingCart }],
  ["شراء البقالة", { id: "shopping", icon: ShoppingCart }],

  // ─────────────────────────────────────────────
  // COOKING
  // ─────────────────────────────────────────────
  ["cook", { id: "cooking", icon: ChefHat }],
  ["cooking", { id: "cooking", icon: ChefHat }],
  ["prepare food", { id: "cooking", icon: ChefHat }],
  ["kochen", { id: "cooking", icon: ChefHat }],
  ["kochen gehen", { id: "cooking", icon: ChefHat }],
  ["essen kochen", { id: "cooking", icon: ChefHat }],
  ["طبخ", { id: "cooking", icon: ChefHat }],
  ["طبخ الطعام", { id: "cooking", icon: ChefHat }],
  ["اطبخ", { id: "cooking", icon: ChefHat }],

  // ─────────────────────────────────────────────
  // EATING
  // ─────────────────────────────────────────────
  ["eat", { id: "eating", icon: Utensils }],
  ["eating", { id: "eating", icon: Utensils }],
  ["lunch", { id: "eating", icon: Utensils }],
  ["dinner", { id: "eating", icon: Utensils }],
  ["breakfast", { id: "eating", icon: Utensils }],
  ["essen", { id: "eating", icon: Utensils }],
  ["frühstück", { id: "eating", icon: Utensils }],
  ["mittagessen", { id: "eating", icon: Utensils }],
  ["abendessen", { id: "eating", icon: Utensils }],
  ["أكل", { id: "eating", icon: Utensils }],
  ["تناول الطعام", { id: "eating", icon: Utensils }],
  ["فطور", { id: "eating", icon: Utensils }],
  ["غداء", { id: "eating", icon: Utensils }],
  ["عشاء", { id: "eating", icon: Utensils }],

  // ─────────────────────────────────────────────
  // TRAVEL
  // ─────────────────────────────────────────────
  ["travel", { id: "travel", icon: Plane }],
  ["traveling", { id: "travel", icon: Plane }],
  ["trip", { id: "travel", icon: Plane }],
  ["vacation", { id: "travel", icon: Plane }],
  ["reise", { id: "travel", icon: Plane }],
  ["reisen", { id: "travel", icon: Plane }],
  ["urlaub", { id: "travel", icon: Plane }],
  ["رحلة", { id: "travel", icon: Plane }],
  ["سفر", { id: "travel", icon: Plane }],
  ["السفر", { id: "travel", icon: Plane }],

  // ─────────────────────────────────────────────
  // DRIVING
  // ─────────────────────────────────────────────
  ["drive", { id: "driving", icon: Car }],
  ["driving", { id: "driving", icon: Car }],
  ["car", { id: "driving", icon: Car }],
  ["fahren", { id: "driving", icon: Car }],
  ["auto", { id: "driving", icon: Car }],
  ["auto fahren", { id: "driving", icon: Car }],
  ["mit dem auto fahren", { id: "driving", icon: Car }],
  ["قيادة", { id: "driving", icon: Car }],
  ["سيارة", { id: "driving", icon: Car }],
  ["قيادة السيارة", { id: "driving", icon: Car }],

  // ─────────────────────────────────────────────
  // PUBLIC TRANSPORT
  // ─────────────────────────────────────────────
  ["train", { id: "public_transport", icon: Train }],
  ["bus", { id: "public_transport", icon: Train }],
  ["tram", { id: "public_transport", icon: Train }],
  ["subway", { id: "public_transport", icon: Train }],
  ["metro", { id: "public_transport", icon: Train }],
  ["public transport", { id: "public_transport", icon: Train }],
  ["öffentliche verkehrsmittel", { id: "public_transport", icon: Train }],
  ["öffis", { id: "public_transport", icon: Train }],
  ["bahn", { id: "public_transport", icon: Train }],
  ["zug", { id: "public_transport", icon: Train }],
  ["bus fahren", { id: "public_transport", icon: Train }],
  ["المواصلات العامة", { id: "public_transport", icon: Train }],
  ["مواصلات", { id: "public_transport", icon: Train }],
  ["قطار", { id: "public_transport", icon: Train }],
  ["حافلة", { id: "public_transport", icon: Train }],
  ["باص", { id: "public_transport", icon: Train }],

  // ─────────────────────────────────────────────
  // DOCTOR / MEDICAL
  // ─────────────────────────────────────────────
  ["doctor", { id: "doctor", icon: Stethoscope }],
  ["doctor appointment", { id: "doctor", icon: Stethoscope }],
  ["medical", { id: "doctor", icon: Stethoscope }],
  ["arzt", { id: "doctor", icon: Stethoscope }],
  ["ärztin", { id: "doctor", icon: Stethoscope }],
  ["arzttermin", { id: "doctor", icon: Stethoscope }],
  ["arztbesuch", { id: "doctor", icon: Stethoscope }],
  ["دكتور", { id: "doctor", icon: Stethoscope }],
  ["طبيب", { id: "doctor", icon: Stethoscope }],
  ["موعد الطبيب", { id: "doctor", icon: Stethoscope }],
  ["طبيب الأسنان", { id: "doctor", icon: Stethoscope }],

  // ─────────────────────────────────────────────
  // PHONE CALL
  // ─────────────────────────────────────────────
  ["call", { id: "phone_call", icon: Phone }],
  ["phone call", { id: "phone_call", icon: Phone }],
  ["call someone", { id: "phone_call", icon: Phone }],
  ["anrufen", { id: "phone_call", icon: Phone }],
  ["telefonieren", { id: "phone_call", icon: Phone }],
  ["telefonat", { id: "phone_call", icon: Phone }],
  ["jemanden anrufen", { id: "phone_call", icon: Phone }],
  ["اتصال", { id: "phone_call", icon: Phone }],
  ["مكالمة", { id: "phone_call", icon: Phone }],
  ["اتصل", { id: "phone_call", icon: Phone }],
  ["الاتصال بشخص", { id: "phone_call", icon: Phone }],

  // ─────────────────────────────────────────────
  // EMAIL
  // ─────────────────────────────────────────────
  ["email", { id: "email", icon: Mail }],
  ["e-mail", { id: "email", icon: Mail }],
  ["send email", { id: "email", icon: Mail }],
  ["mail", { id: "email", icon: Mail }],
  ["email schreiben", { id: "email", icon: Mail }],
  ["e-mail schreiben", { id: "email", icon: Mail }],
  ["eine mail schreiben", { id: "email", icon: Mail }],
  ["بريد إلكتروني", { id: "email", icon: Mail }],
  ["إيميل", { id: "email", icon: Mail }],
  ["رسالة إلكترونية", { id: "email", icon: Mail }],

  // ─────────────────────────────────────────────
  // CLEANING
  // ─────────────────────────────────────────────
  ["clean", { id: "cleaning", icon: Sparkles }],
  ["cleaning", { id: "cleaning", icon: Sparkles }],
  ["clean up", { id: "cleaning", icon: Sparkles }],
  ["put away", { id: "cleaning", icon: Sparkles }],
  ["aufräumen", { id: "cleaning", icon: Sparkles }],
  ["putzen", { id: "cleaning", icon: Sparkles }],
  ["saubermachen", { id: "cleaning", icon: Sparkles }],
  ["Wohnung putzen", { id: "cleaning", icon: Sparkles }],
  ["تنظيف", { id: "cleaning", icon: Sparkles }],
  ["تنظيف المنزل", { id: "cleaning", icon: Sparkles }],
  ["تنظيف البيت", { id: "cleaning", icon: Sparkles }],

  // ─────────────────────────────────────────────
  // SHOWER
  // ─────────────────────────────────────────────
  ["shower", { id: "shower", icon: ShowerHead }],
  ["take a shower", { id: "shower", icon: ShowerHead }],
  ["duschen", { id: "shower", icon: ShowerHead }],
  ["duschen gehen", { id: "shower", icon: ShowerHead }],
  ["الاستحمام", { id: "shower", icon: ShowerHead }],
  ["استحمام", { id: "shower", icon: ShowerHead }],

  // ─────────────────────────────────────────────
  // SLEEPING
  // ─────────────────────────────────────────────
  ["sleep", { id: "sleeping", icon: Home }],
  ["sleeping", { id: "sleeping", icon: Home }],
  ["go to sleep", { id: "sleeping", icon: Home }],
  ["bed", { id: "sleeping", icon: Home }],
  ["schlafen", { id: "sleeping", icon: Home }],
  ["schlafen gehen", { id: "sleeping", icon: Home }],
  ["ins bett gehen", { id: "sleeping", icon: Home }],
  ["النوم", { id: "sleeping", icon: Home }],
  ["نوم", { id: "sleeping", icon: Home }],
  ["اذهب للنوم", { id: "sleeping", icon: Home }],

  // ─────────────────────────────────────────────
  // MUSIC
  // ─────────────────────────────────────────────
  ["music", { id: "music", icon: Music }],
  ["listen to music", { id: "music", icon: Music }],
  ["song", { id: "music", icon: Music }],
  ["musik", { id: "music", icon: Music }],
  ["musik hören", { id: "music", icon: Music }],
  ["lied", { id: "music", icon: Music }],
  ["موسيقى", { id: "music", icon: Music }],
  ["استماع للموسيقى", { id: "music", icon: Music }],
  ["أغنية", { id: "music", icon: Music }],

  // ─────────────────────────────────────────────
  // PHOTOGRAPHY
  // ─────────────────────────────────────────────
  ["photo", { id: "photography", icon: Camera }],
  ["photos", { id: "photography", icon: Camera }],
  ["photography", { id: "photography", icon: Camera }],
  ["take photos", { id: "photography", icon: Camera }],
  ["picture", { id: "photography", icon: Camera }],
  ["fotografieren", { id: "photography", icon: Camera }],
  ["foto", { id: "photography", icon: Camera }],
  ["fotos machen", { id: "photography", icon: Camera }],
  ["تصوير", { id: "photography", icon: Camera }],
  ["تصوير فوتوغرافي", { id: "photography", icon: Camera }],
  ["التقاط الصور", { id: "photography", icon: Camera }],

  // ─────────────────────────────────────────────
  // GAMING
  // ─────────────────────────────────────────────
  ["game", { id: "gaming", icon: Gamepad2 }],
  ["gaming", { id: "gaming", icon: Gamepad2 }],
  ["play games", { id: "gaming", icon: Gamepad2 }],
  ["video game", { id: "gaming", icon: Gamepad2 }],
  ["videospiel", { id: "gaming", icon: Gamepad2 }],
  ["spielen", { id: "gaming", icon: Gamepad2 }],
  ["zocken", { id: "gaming", icon: Gamepad2 }],
  ["computerspielen", { id: "gaming", icon: Gamepad2 }],
  ["ألعاب", { id: "gaming", icon: Gamepad2 }],
  ["لعب", { id: "gaming", icon: Gamepad2 }],
  ["ألعاب فيديو", { id: "gaming", icon: Gamepad2 }],

  // ─────────────────────────────────────────────
  // WRITING
  // ─────────────────────────────────────────────
  ["write", { id: "writing", icon: PenLine }],
  ["writing", { id: "writing", icon: PenLine }],
  ["write something", { id: "writing", icon: PenLine }],
  ["schreiben", { id: "writing", icon: PenLine }],
  ["aufschreiben", { id: "writing", icon: PenLine }],
  ["Notizen schreiben", { id: "writing", icon: PenLine }],
  ["كتابة", { id: "writing", icon: PenLine }],
  ["اكتب", { id: "writing", icon: PenLine }],
  ["تدوين", { id: "writing", icon: PenLine }],

  // ─────────────────────────────────────────────
  // FINANCE
  // ─────────────────────────────────────────────
  ["money", { id: "finance", icon: DollarSign }],
  ["finance", { id: "finance", icon: DollarSign }],
  ["payment", { id: "finance", icon: DollarSign }],
  ["pay", { id: "finance", icon: DollarSign }],
  ["bill", { id: "finance", icon: DollarSign }],
  ["rechnung", { id: "finance", icon: DollarSign }],
  ["bezahlen", { id: "finance", icon: DollarSign }],
  ["zahlung", { id: "finance", icon: DollarSign }],
  ["geld", { id: "finance", icon: DollarSign }],
  ["فاتورة", { id: "finance", icon: DollarSign }],
  ["دفع", { id: "finance", icon: DollarSign }],
  ["مال", { id: "finance", icon: DollarSign }],

  // ─────────────────────────────────────────────
  // LOCATION / PLACES
  // ─────────────────────────────────────────────
  ["location", { id: "location", icon: MapPin }],
  ["place", { id: "location", icon: MapPin }],
  ["where", { id: "location", icon: MapPin }],
  ["ort", { id: "location", icon: MapPin }],
  ["standort", { id: "location", icon: MapPin }],
  ["adresse", { id: "location", icon: MapPin }],
  ["موقع", { id: "location", icon: MapPin }],
  ["مكان", { id: "location", icon: MapPin }],
  ["عنوان", { id: "location", icon: MapPin }],

  // ─────────────────────────────────────────────
  // HOME
  // ─────────────────────────────────────────────
  ["home", { id: "home", icon: Home }],
  ["house", { id: "home", icon: Home }],
  ["at home", { id: "home", icon: Home }],
  ["zu hause", { id: "home", icon: Home }],
  ["zuhause", { id: "home", icon: Home }],
  ["nach hause", { id: "home", icon: Home }],
  ["البيت", { id: "home", icon: Home }],
  ["المنزل", { id: "home", icon: Home }],
  ["في المنزل", { id: "home", icon: Home }],

  // ─────────────────────────────────────────────
  // COMMUNICATION / MESSAGING
  // ─────────────────────────────────────────────
  ["message", { id: "communication", icon: MessageCircle }],
  ["text", { id: "communication", icon: MessageCircle }],
  ["text someone", { id: "communication", icon: MessageCircle }],
  ["chat", { id: "communication", icon: MessageCircle }],
  ["messaging", { id: "communication", icon: MessageCircle }],
  ["nachricht", { id: "communication", icon: MessageCircle }],
  ["schreiben", { id: "communication", icon: MessageCircle }],
  ["chatten", { id: "communication", icon: MessageCircle }],
  ["رسالة", { id: "communication", icon: MessageCircle }],
  ["مراسلة", { id: "communication", icon: MessageCircle }],
  ["محادثة", { id: "communication", icon: MessageCircle }],

  // ─────────────────────────────────────────────
  // SELF CARE
  // ─────────────────────────────────────────────
  ["self care", { id: "self_care", icon: HandHeart }],
  ["self-care", { id: "self_care", icon: HandHeart }],
  ["relax", { id: "self_care", icon: HandHeart }],
  ["relaxing", { id: "self_care", icon: HandHeart }],
  ["wellness", { id: "self_care", icon: HandHeart }],
  ["entspannen", { id: "self_care", icon: HandHeart }],
  ["entspannung", { id: "self_care", icon: HandHeart }],
  ["erholen", { id: "self_care", icon: HandHeart }],
  ["العناية بالنفس", { id: "self_care", icon: HandHeart }],
  ["استرخاء", { id: "self_care", icon: HandHeart }],
  ["راحة", { id: "self_care", icon: HandHeart }],

  // ─────────────────────────────────────────────
  // HEALTH
  // ─────────────────────────────────────────────
  ["health", { id: "health", icon: HeartPulse }],
  ["healthy", { id: "health", icon: HeartPulse }],
  ["medicine", { id: "health", icon: HeartPulse }],
  ["medication", { id: "health", icon: HeartPulse }],
  ["gesundheit", { id: "health", icon: HeartPulse }],
  ["gesund", { id: "health", icon: HeartPulse }],
  ["medikamente", { id: "health", icon: HeartPulse }],
  ["gesund werden", { id: "health", icon: HeartPulse }],
  ["صحة", { id: "health", icon: HeartPulse }],
  ["دواء", { id: "health", icon: HeartPulse }],
  ["أدوية", { id: "health", icon: HeartPulse }],

  // ─────────────────────────────────────────────
  // GENERAL / UNKNOWN
  // ─────────────────────────────────────────────
  ["general", { id: "general", icon: CircleHelp }],
]);
