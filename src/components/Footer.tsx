export default function Footer() {
    return (
        <footer className="py-8 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                    © {new Date().getFullYear()} Imesh Nirmal. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
