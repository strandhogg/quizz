const questions = [
    {
        question_id: "P01",
        question: "Have you worked with a terminal/shell before?",
        choices: {
            "yes":true,
            "no":true
        }
    },
    {
        question_id: "P02",
        question: "Have you worked with linux before",
        choices: {
            "yes":true,
            "no":true
        }
    },
    {
        question_id: "P03",
        question: "Have you worked with a SIEM system before?",
        choices: {
            "yes":true,
            "no":true
        } 
    },
    {
        question_id: "P04",
        question: "Have you heard about IR before?",
        choices: {
            "yes":true,
            "no":true
        }
    },
    {
        question_id: "P05",
        question: "Have you attended a CR/CTF before?",
        choices: {
            "yes":true,
            "no":true
        }
    },
    {
        question_id: "Q01",
        question: "What is an IP address?",
        choices: {
            "The network address of a device" : true,
            "The hardware address of device" : false,
            "The domain name of a service" : false,
            "The address for telephonic transmission of scanned printed" : false
        }
    },
    {
        question_id: "Q02",
        question: "What is a MAC address?",
        choices: {
            "The hardware address of a device" : true,
            "The network address of a device" : false,
            "The domain name of a service" : false,
            "The unique address of subscriber identity modules (SIM)" : false
        }
    },
    {
        question_id: "Q03",
        question: "What is the TCP protocol?",
        choices: {
            "A network-layer protocol, defining how data is exchanged between network components on the network layer" : true,
            "A cryptographic protocol designed to provide communications security over a computer network" : false,
            "An internet-layer protocol for exchange of information and error messages when communicating with another IP address" : false,
            "An application-layer Internet standard protocol used by e-mail clients" : false
        }
    },
    {
        question_id: "Q04",
        question: "What is the ARP protocol?",
        choices: {
            "A communication protocol mapping IP addresses to MAC addresses" : true,
            "A network-layer protocol, defining how data is exchanged between network components on the network layer" : false,
            "A cryptographic protocol designed to provide communications security over a computer network" : false,
            "A network protocol for operating network services securely over an unsecured network" : false
        }
    },
    {
        question_id: "Q05",
        question: "What is a PLC(SPS)?",
        choices: {
            "An industrial computer control system, e.g. for controlling sensorsn" : true,
            "The processing unit of a computer" : false,
            "A multi-purpose computer operated by an end user" : false,
            "The core of a computer’s operating system" : false
        }
    },
    {
        question_id: "Q06",
        question: "What is an ICS?",
        choices: {
            "A virtually connected physical system" : true,
            "A user interface for interaction with physical maschines" : false,
            "An industrial sensor" : false,
            "The digital representation of a physical asset" : false
        }
    },
    {
        question_id: "Q07",
        question: "What is the purpose of a SIEM system?",
        choices: {
            "Correlating security-relevant data from across the entire network to detect incidents" : true,
            "Reporting the status of the current tasks of the cyber security team" : false,
            "Controlling incoming an outgoing network traffic based on predetermined security rules" : false,
            "Performing integrated management of main business process" : false
        }
    },
    {
        question_id: "Q08",
        question: "What is a SIEM event?",
        choices: {
            "A security-related log, transmitted to a SIEM system" : true,
            "An attack identified by the SIEM system" : false,
            "A conference for SIEM experts" : false,
            "A potentially manipulated file, identified by the SIEM system" : false
        }
    },
    {
        question_id: "Q09",
        question: "What is the difference between a SIEM system and an IDS?",
        choices: {
            "A SIEM correlates security-related  log data from various sources an IDS monitors a network for suspicious activities" : true,
            "A SIEM is the technical component of an IDS" : false,
            "There is no difference" : false,
            "A SIEM operates on a network, an IDS on an application layer" : false
        }
    },
    {
        question_id: "Q10",
        question: "What is a Man In The Middle (MiTM) Attack?",
        choices: {
            "Intercepting the network traffic between to parties" : true,
            "Exhausting the system resources of a server" : false,
            "Phising for passwords via malicous email" : false,
            "A malware attack targeting middleware" : false
        }
    },
    {
        question_id: "Q11",
        question: "Effect of a MiTM Attack on an industrial system?",
        choices: {
            "Inability of the ICS to read the sensor values, resulting in an interruption of the physical process" : true,
            "Escalation of priviledge on an HMI" : false,
            "Replication of malware code on other devices in the network" : false,
            "Temporary inaccessibility of the ICS because it is flooded with requests" : false
        }
    },
    {
        question_id: "Q12",
        question: "How does ARP spoffing work?",
        choices: {
            "Linking the attacker’s MAC address with the IP of the victim" : true,
            "Poisoning the DNS cache of a client" : false,
            "Replacing the IP address of a network packet" : false,
            "Changing a factory-assigned IP address of a network interface" : false
        }
    },
    {
        question_id: "Q13",
        question: "What is Incident Respons mainly concerned with?",
        choices: {
            "Reacting to security incidents in a coherent and repeatable manner" : true,
            "Secure SW development" : false,
            "Implementing security controls such as anti malware software or access control" : false,
            "Managment of security risks and policies" : false
        }
    },
    {
        question_id: "Q14",
        question: "What is the first step of incident response?",
        choices: {
            "Preparation" : true,
            "Investigation" : false,
            "Response" : false,
            "Analysis" : false
        }
    },
    {
        question_id: "Q15",
        question: "What is an inciden response playbook?",
        choices: {
            "A list of actions how to react to a specific kind of incident" : true,
            "A software for incident management" : false,
            "A standard for incident categorization" : false,
            "A database for cyber threat intelligence" : false
        }
    },
    {
        question_id: "Q16",
        question: "How can you identify the attacking host during an ARP-based MiTM Attack?",
        choices: {
            "Identifying which MAC address is falsley assigned to another network host" : true,
            "Identifying the network host which sends an unusual high amount of requests" : false,
            "Identifying the network host opening a VPN connection" : false,
            "Identifying who modified the /etc/shadow" : false
        }
    },
    {
        question_id: "Q17",
        question: "How can you make an ARP cache static?",
        choices: {
            "arp -s<IP><MAC>" : true,
            "arp -a<MAC1><MAC2>" : false,
            "vi /etc/sysconfig/network" : false,
            "more /etc/hosts --static" : false
        }
    },
    {
        question_id: "Q18",
        question: "How can you take down the interface of a network device?",
        choices: {
            "ip link set dev <INTERFACE> down" : true,
            "ifconfig <INTERFACE>" : false,
            "service network stop" : false,
            "ip route list <INTERFACE>" : false
        }
    }
]

export default questions;
