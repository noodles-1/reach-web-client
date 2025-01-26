import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const AboutDashboard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle> About the Dashboard </CardTitle>
            </CardHeader>
            <CardContent>
                This dashboard provides insights into waste management on campus, focusing on recyclable items. Use this tool to track trends and help promote sustainability initiatives. Thank you for being a part of our eco-friendly efforts! 
            </CardContent>
        </Card>
    );
}
 
export default AboutDashboard;