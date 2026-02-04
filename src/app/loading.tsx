export default function Loading() {
    return (
        <div className="fixed inset-0 bg-cream-100 flex items-center justify-center z-50">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-primary-100 rounded-full" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-primary-500 rounded-full border-t-transparent animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-accent-500 rounded-full animate-bounce" />
                </div>
            </div>
        </div>
    );
}
