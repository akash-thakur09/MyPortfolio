import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email.trim()) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email.";
        if (!form.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setSuccess(false);
        setError("");

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            // simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSuccess(true);
            setForm({ name: "", email: "", message: "" });
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 bg-gray-900/50 relative">
            <div className="max-w-6xl mx-auto lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-code inline-block relative text-white mb-1">
                        Get in <span className="text-green-400">Touch</span>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 opacity-70"></div>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat about code? Drop me a
                        message, and let’s make things happen!
                    </p>
                </div>

                {/* Contact Content */}
                <div className="relative bg-gray-950 p-8 rounded-lg border border-gray-800 shadow-lg animate-fadeInUp">
                    {/* background pattern box */}
                    <div className="absolute -bottom-20 -right-20 size-56 bg-gray-800/20 border-2 border-gray-700 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-hero opacity-[.03]"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                        {/* Contact Form */}
                        <div className="relative">
                            <h3 className="text-xl font-bold font-code text-white mb-6 flex items-center gap-2">
                                <i className="fas fa-envelope text-green-400"></i> Send a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                        className="w-full py-3 px-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-400 transition-colors"
                                        placeholder="Your Name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                        className="w-full py-3 px-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-400 transition-colors"
                                        placeholder="Your Email"
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({ ...form, message: e.target.value })
                                        }
                                        className="w-full py-3 px-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-400 transition-colors"
                                        placeholder="Your Message"
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                                >
                                    <i className="fas fa-paper-plane"></i>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>

                                {success && (
                                    <p className="text-green-400 text-center mt-4">
                                        Message sent successfully!
                                    </p>
                                )}
                                {error && (
                                    <p className="text-red-400 text-center mt-4">{error}</p>
                                )}
                            </form>
                        </div>

                        {/* Contact Info & Social Links */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold font-code text-white mb-6 flex items-center gap-2">
                                    Contact Info
                                </h3>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-envelope text-green-400"></i>
                                        <a
                                            href="mailto:john@devworkspace.com"
                                            className="hover:text-green-400 transition-colors"
                                        >
                                            john@devworkspace.com
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-phone-alt text-green-400"></i>
                                        <a
                                            href="tel:+1234567890"
                                            className="hover:text-green-400 transition-colors"
                                        >
                                            +1 (234) 567-890
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-map-marker-alt text-green-400"></i>
                                        <span>San Francisco, CA</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold font-code text-white mb-6 flex items-center gap-2">
                                    Connect with Me
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        className="text-gray-300 hover:text-green-400 text-2xl transition-transform transform hover:scale-110"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/"
                                        target="_blank"
                                        className="text-gray-300 hover:text-green-400 text-2xl transition-transform transform hover:scale-110"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        className="text-gray-300 hover:text-green-400 text-2xl transition-transform transform hover:scale-110"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                        href="https://dev.to/"
                                        target="_blank"
                                        className="text-gray-300 hover:text-green-400 text-2xl transition-transform transform hover:scale-110"
                                    >
                                        <i className="fab fa-dev"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coffee cup decoration */}
                    <div className="absolute bottom-10 right-10 w-12 h-16">
                        <div className="absolute -right-4 top-6 h-8 w-8 border-4 border-gray-700 rounded-r-full"></div>
                        <div className="absolute bottom-0 w-full h-10 bg-gray-700 rounded-b-lg"></div>
                        <div className="absolute bottom-8 w-full h-8 bg-gray-600 rounded-lg">
                            <div className="absolute inset-1 rounded-lg bg-gradient-to-b from-amber-700 to-amber-900"></div>
                        </div>
                        <div className="absolute w-6 h-1 bg-white/20 left-3 top-3"></div>
                        {/* Steam */}
                        <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 left-4 -top-2 animate-pulse"></div>
                        <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 left-6 -top-4 animate-pulse"></div>
                        <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 left-8 -top-3 animate-pulse"></div>
                        <div className="absolute left-2 bottom-3 text-[8px] tracking-widest">
                            COFFEE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}