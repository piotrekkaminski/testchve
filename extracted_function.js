// Extracted and formatted ulpPatternCheckFunction from Scribd signup page
// Location: /workspace/scribd_actual_signup.html, line 982, within <script id="client-scripts">

ulpPatternCheckFunction: function(e, t) {
    return !t || !e.value || function(e) {
        if ("password" === e.name) return !0;  // ← THE PROBLEM: Always returns true for password fields!
        var t = e.getAttribute("pattern");
        return !t || null !== e.value.match(t)
    }(e)
}

// Parameters:
// e = the input element
// t = validation trigger flag
//
// The function should validate input patterns, but it has a hardcoded bypass:
// - If the field name is "password", it ALWAYS returns true (valid)
// - This completely bypasses pattern validation for password fields
// - Only non-password fields get proper pattern validation